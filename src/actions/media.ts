import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '../db/client';

export const mediaActions = {
  addMediaLink: defineAction({
    input: z.object({
      url: z.string().url('URL gambar harus merupakan alamat web yang valid (http/https)'),
      filename: z.string().min(2, 'Nama berkas / label minimal 2 karakter'),
      altText: z.string().optional().nullable(),
      provider: z.string().default('imgbb'),
    }),
    handler: async (input, context) => {
      const user = context.locals.user;
      if (!user) {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'Anda harus masuk sebagai administrator.',
        });
      }

      const db = context.locals.runtime?.env?.DB;
      if (!db) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Basis data D1 tidak tersedia.',
        });
      }

      const d1 = getDb(db);
      const mediaId = crypto.randomUUID();
      const now = new Date().toISOString();

      // Determine mime type from extension if available
      let mimeType = 'image/jpeg';
      const cleanUrl = input.url.toLowerCase();
      if (cleanUrl.endsWith('.png')) mimeType = 'image/png';
      else if (cleanUrl.endsWith('.webp')) mimeType = 'image/webp';
      else if (cleanUrl.endsWith('.gif')) mimeType = 'image/gif';
      else if (cleanUrl.endsWith('.svg')) mimeType = 'image/svg+xml';

      await d1.insert(schema.media).values({
        id: mediaId,
        provider: input.provider || 'imgbb',
        providerImageId: null,
        originalUrl: input.url,
        displayUrl: input.url,
        thumbnailUrl: input.url,
        filename: input.filename,
        mimeType,
        fileSize: 0,
        width: null,
        height: null,
        altText: input.altText || null,
        createdAt: now,
      });

      return {
        success: true,
        mediaId,
        displayUrl: input.url,
      };
    },
  }),

  deleteMedia: defineAction({
    input: z.object({
      id: z.string().min(1),
    }),
    handler: async (input, context) => {
      const user = context.locals.user;
      if (!user) {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'Anda harus masuk sebagai administrator.',
        });
      }

      const db = context.locals.runtime?.env?.DB;
      if (!db) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Basis data D1 tidak tersedia.',
        });
      }

      const d1 = getDb(db);

      // 1. Check if used in blog posts cover
      const postUsage = await d1
        .select({ id: schema.posts.id, titleId: schema.posts.titleId })
        .from(schema.posts)
        .where(eq(schema.posts.coverMediaId, input.id))
        .limit(1);

      if (postUsage.length > 0) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: `Gambar ini tidak dapat dihapus karena masih digunakan sebagai sampul artikel: "${postUsage[0].titleId}".`,
        });
      }

      // 2. Check if used in gallery album cover
      const albumUsage = await d1
        .select({ id: schema.galleryAlbums.id, titleId: schema.galleryAlbums.titleId })
        .from(schema.galleryAlbums)
        .where(eq(schema.galleryAlbums.coverMediaId, input.id))
        .limit(1);

      if (albumUsage.length > 0) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: `Gambar ini tidak dapat dihapus karena masih digunakan sebagai sampul album: "${albumUsage[0].titleId}".`,
        });
      }

      // 3. Check if used as a photo item in gallery_items
      const itemUsage = await d1
        .select({ id: schema.galleryItems.id })
        .from(schema.galleryItems)
        .where(eq(schema.galleryItems.mediaId, input.id))
        .limit(1);

      if (itemUsage.length > 0) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Gambar ini tidak dapat dihapus karena masih tercantum sebagai item foto dalam album galeri.',
        });
      }

      // Safe to delete
      await d1.delete(schema.media).where(eq(schema.media.id, input.id));

      return { success: true };
    },
  }),
};
