import { eq } from 'drizzle-orm';
import { getDb, schema } from '../db/client';

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt.buffer as ArrayBuffer,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'HMAC', hash: 'SHA-256', length: 256 },
    true,
    ['sign']
  );
  const exported = await crypto.subtle.exportKey('raw', key);
  const saltHex = bytesToHex(salt);
  const hashHex = bytesToHex(new Uint8Array(exported));
  return `${saltHex}:${hashHex}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const parts = storedHash.split(':');
  if (parts.length !== 2) return false;
  const [saltHex, expectedHashHex] = parts;
  const salt = hexToBytes(saltHex);

  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt.buffer as ArrayBuffer,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'HMAC', hash: 'SHA-256', length: 256 },
    true,
    ['sign']
  );
  const exported = await crypto.subtle.exportKey('raw', key);
  const derivedHashHex = bytesToHex(new Uint8Array(exported));

  if (derivedHashHex.length !== expectedHashHex.length) return false;
  let diff = 0;
  for (let i = 0; i < derivedHashHex.length; i++) {
    diff |= derivedHashHex.charCodeAt(i) ^ expectedHashHex.charCodeAt(i);
  }
  return diff === 0;
}

export function generateSessionToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return bytesToHex(bytes);
}

export async function hashToken(token: string): Promise<string> {
  const enc = new TextEncoder();
  const buffer = await crypto.subtle.digest('SHA-256', enc.encode(token));
  return bytesToHex(new Uint8Array(buffer));
}

export const SESSION_COOKIE_NAME = 'saindo_session';
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export async function createSession(
  d1: D1Database,
  userId: string
): Promise<{ token: string; expiresAt: string }> {
  const db = getDb(d1);
  const token = generateSessionToken();
  const tokenHash = await hashToken(token);
  const sessionId = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE_SECONDS * 1000).toISOString();
  const now = new Date().toISOString();

  await db.insert(schema.sessions).values({
    id: sessionId,
    userId,
    tokenHash,
    expiresAt,
    createdAt: now,
  });

  return { token, expiresAt };
}

export async function validateSession(
  d1: D1Database,
  token: string
): Promise<{
  session: { id: string; userId: string; expiresAt: string };
  user: { id: string; name: string; email: string; role: string };
} | null> {
  const db = getDb(d1);
  const tokenHash = await hashToken(token);

  const foundSessions = await db
    .select()
    .from(schema.sessions)
    .where(eq(schema.sessions.tokenHash, tokenHash))
    .limit(1);

  if (foundSessions.length === 0) {
    return null;
  }

  const session = foundSessions[0];
  const nowMs = Date.now();
  const expiryMs = new Date(session.expiresAt).getTime();

  if (expiryMs <= nowMs) {
    // Session has expired, remove it from D1
    await db.delete(schema.sessions).where(eq(schema.sessions.id, session.id));
    return null;
  }

  // Fetch corresponding user
  const foundUsers = await db
    .select({
      id: schema.users.id,
      name: schema.users.name,
      email: schema.users.email,
      role: schema.users.role,
      isActive: schema.users.isActive,
    })
    .from(schema.users)
    .where(eq(schema.users.id, session.userId))
    .limit(1);

  if (foundUsers.length === 0 || foundUsers[0].isActive !== 1) {
    return null;
  }

  const user = foundUsers[0];

  return {
    session: {
      id: session.id,
      userId: session.userId,
      expiresAt: session.expiresAt,
    },
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}

export async function invalidateSession(d1: D1Database, token: string): Promise<void> {
  const db = getDb(d1);
  const tokenHash = await hashToken(token);
  await db.delete(schema.sessions).where(eq(schema.sessions.tokenHash, tokenHash));
}

export async function updateUserLastLogin(d1: D1Database, userId: string): Promise<void> {
  const db = getDb(d1);
  await db
    .update(schema.users)
    .set({
      lastLoginAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    .where(eq(schema.users.id, userId));
}
