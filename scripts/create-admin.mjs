import { webcrypto } from 'node:crypto';
import { randomUUID } from 'node:crypto';

async function hashPassword(password) {
  const enc = new TextEncoder();
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await webcrypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );
  const key = await webcrypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'HMAC', hash: 'SHA-256', length: 256 },
    true,
    ['sign']
  );
  const exported = await webcrypto.subtle.exportKey('raw', key);
  const saltHex = Buffer.from(salt).toString('hex');
  const hashHex = Buffer.from(exported).toString('hex');
  return `${saltHex}:${hashHex}`;
}

async function main() {
  const email = process.argv[2] || 'admin@lpksaindo.com';
  const password = process.argv[3] || 'SaindoAdmin2026!';
  const name = process.argv[4] || 'Super Admin Saindo';

  console.log(`Generating admin user: ${email}...`);
  const passwordHash = await hashPassword(password);
  const id = randomUUID();
  const now = new Date().toISOString();

  const sql = `INSERT INTO users (id, name, email, password_hash, role, is_active, created_at, updated_at)
VALUES ('${id}', '${name}', '${email}', '${passwordHash}', 'super_admin', 1, '${now}', '${now}');`;

  console.log('\n--- SQL Command for D1 ---');
  console.log(sql);
  console.log('\nTo insert into local D1, run:');
  console.log(`npx wrangler d1 execute lpksaindo_db --local --command="${sql.replace(/"/g, '\\"')}"`);
}

main().catch(console.error);
