import { eq } from 'drizzle-orm';
import { getDb, schema } from '../db/client';

/**
 * Resolves cover media ID from either an external URL (e.g. ImgBB, Unsplash, direct link)
 * or an existing library media ID. If an external URL is provided, it is automatically
 * registered into the media table if not already present.
 */
export async function resolveCoverMediaId(
  d1Instance: D1Database,
  params: {
    externalUrl?: string | null;
    selectedMediaId?: string | null;
    title?: string | null;
  }
): Promise<string | null> {
  const { externalUrl, selectedMediaId, title } = params;
  const trimmedUrl = externalUrl?.trim();

  if (trimmedUrl && (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://'))) {
    const db = getDb(d1Instance);
    // 1. Check if media with this displayUrl already exists
    const existing = await db
      .select({ id: schema.media.id })
      .from(schema.media)
      .where(eq(schema.media.displayUrl, trimmedUrl))
      .limit(1);

    if (existing.length > 0) {
      return existing[0].id;
    }

    // 2. Insert new media record
    const mediaId = crypto.randomUUID();
    const now = new Date().toISOString();
    let mimeType = 'image/jpeg';
    const cleanUrl = trimmedUrl.toLowerCase();
    if (cleanUrl.endsWith('.png')) mimeType = 'image/png';
    else if (cleanUrl.endsWith('.webp')) mimeType = 'image/webp';
    else if (cleanUrl.endsWith('.gif')) mimeType = 'image/gif';
    else if (cleanUrl.endsWith('.svg')) mimeType = 'image/svg+xml';

    const safeTitle = (title || 'Sampul').slice(0, 40).trim();
    const filename = `Sampul: ${safeTitle} (${Date.now().toString().slice(-6)})`;

    await db.insert(schema.media).values({
      id: mediaId,
      provider: trimmedUrl.includes('ibb.co') ? 'imgbb' : 'external',
      providerImageId: null,
      originalUrl: trimmedUrl,
      displayUrl: trimmedUrl,
      thumbnailUrl: trimmedUrl,
      filename,
      mimeType,
      fileSize: 0,
      altText: safeTitle,
      createdAt: now,
    });

    return mediaId;
  }

  // Fallback to selected media from library or null
  return selectedMediaId?.trim() || null;
}
