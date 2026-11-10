import { eq } from 'drizzle-orm';
import { getDb, schema } from '../client';

export async function getAllSettings(d1: D1Database): Promise<Record<string, string>> {
  const db = getDb(d1);
  const rows = await db.select().from(schema.settings).all();
  const map: Record<string, string> = {};
  for (const row of rows) {
    map[row.key] = row.value;
  }
  return map;
}

export async function getSetting(d1: D1Database, key: string): Promise<string | null> {
  const db = getDb(d1);
  const rows = await db.select().from(schema.settings).where(eq(schema.settings.key, key)).limit(1);
  return rows.length > 0 ? rows[0].value : null;
}
