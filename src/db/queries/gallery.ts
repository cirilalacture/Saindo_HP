import { eq, desc, and } from 'drizzle-orm';
import { getDb, schema } from '../client';

export interface AlbumListItem {
  id: string;
  slug: string;
  titleId: string;
  titleJa: string | null;
  descriptionId: string | null;
  descriptionJa: string | null;
  coverUrl: string | null;
  eventDate: string | null;
  itemCount: number;
}

export async function getPublishedAlbums(d1: D1Database): Promise<AlbumListItem[]> {
  const db = getDb(d1);
  const rows = await db
    .select({
      id: schema.galleryAlbums.id,
      slug: schema.galleryAlbums.slug,
      titleId: schema.galleryAlbums.titleId,
      titleJa: schema.galleryAlbums.titleJa,
      descriptionId: schema.galleryAlbums.descriptionId,
      descriptionJa: schema.galleryAlbums.descriptionJa,
      coverUrl: schema.media.displayUrl,
      eventDate: schema.galleryAlbums.eventDate,
      sortOrder: schema.galleryAlbums.sortOrder,
    })
    .from(schema.galleryAlbums)
    .leftJoin(schema.media, eq(schema.galleryAlbums.coverMediaId, schema.media.id))
    .where(eq(schema.galleryAlbums.isPublished, 1))
    .orderBy(schema.galleryAlbums.sortOrder, desc(schema.galleryAlbums.eventDate))
    .all();

  // Get count of photos for each album
  const result: AlbumListItem[] = [];
  for (const row of rows) {
    const items = await db
      .select({ id: schema.galleryItems.id })
      .from(schema.galleryItems)
      .where(eq(schema.galleryItems.albumId, row.id))
      .all();

    result.push({
      ...row,
      itemCount: items.length,
    });
  }

  return result;
}

export async function getAlbumBySlug(d1: D1Database, slug: string) {
  const db = getDb(d1);
  const albums = await db
    .select({
      album: schema.galleryAlbums,
      cover: schema.media,
    })
    .from(schema.galleryAlbums)
    .leftJoin(schema.media, eq(schema.galleryAlbums.coverMediaId, schema.media.id))
    .where(and(eq(schema.galleryAlbums.slug, slug), eq(schema.galleryAlbums.isPublished, 1)))
    .limit(1);

  if (albums.length === 0) return null;

  const album = albums[0];

  // Fetch all items in album with their media info
  const items = await db
    .select({
      id: schema.galleryItems.id,
      captionId: schema.galleryItems.captionId,
      captionJa: schema.galleryItems.captionJa,
      sortOrder: schema.galleryItems.sortOrder,
      displayUrl: schema.media.displayUrl,
      originalUrl: schema.media.originalUrl,
      altText: schema.media.altText,
    })
    .from(schema.galleryItems)
    .innerJoin(schema.media, eq(schema.galleryItems.mediaId, schema.media.id))
    .where(eq(schema.galleryItems.albumId, album.album.id))
    .orderBy(schema.galleryItems.sortOrder)
    .all();

  return {
    ...album,
    items,
  };
}
