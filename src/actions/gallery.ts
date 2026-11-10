import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '../db/client';

export const galleryActions = {
  createAlbum: defineAction({
    input: z.object({
      titleId: z.string().min(3, 'Judul album Indonesia minimal 3 karakter'),
      titleJa: z.string().optional().nullable(),
      slug: z.string().min(3, 'Slug URL minimal 3 karakter'),
      descriptionId: z.string().optional().nullable(),
      descriptionJa: z.string().optional().nullable(),
      eventDate: z.string().optional().nullable(),
      coverMediaId: z.string().optional().nullable(),
      isPublished: z.number().default(1),
      sortOrder: z.number().default(0),
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
      const albumId = crypto.randomUUID();
      const now = new Date().toISOString();

      const cleanSlug = input.slug
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

      // Check uniqueness of slug
      const existing = await d1
        .select({ id: schema.galleryAlbums.id })
        .from(schema.galleryAlbums)
        .where(eq(schema.galleryAlbums.slug, cleanSlug))
        .limit(1);

      if (existing.length > 0) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: `Slug "${cleanSlug}" sudah digunakan oleh album lain.`,
        });
      }

      await d1.insert(schema.galleryAlbums).values({
        id: albumId,
        titleId: input.titleId,
        titleJa: input.titleJa || null,
        slug: cleanSlug,
        descriptionId: input.descriptionId || null,
        descriptionJa: input.descriptionJa || null,
        coverMediaId: input.coverMediaId || null,
        isPublished: input.isPublished,
        sortOrder: input.sortOrder,
        eventDate: input.eventDate || null,
        createdAt: now,
        updatedAt: now,
      });

      return {
        success: true,
        albumId,
        slug: cleanSlug,
      };
    },
  }),

  updateAlbum: defineAction({
    input: z.object({
      id: z.string().min(1),
      titleId: z.string().min(3, 'Judul album Indonesia minimal 3 karakter'),
      titleJa: z.string().optional().nullable(),
      slug: z.string().min(3, 'Slug URL minimal 3 karakter'),
      descriptionId: z.string().optional().nullable(),
      descriptionJa: z.string().optional().nullable(),
      eventDate: z.string().optional().nullable(),
      coverMediaId: z.string().optional().nullable(),
      isPublished: z.number().default(1),
      sortOrder: z.number().default(0),
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
      const now = new Date().toISOString();

      const cleanSlug = input.slug
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

      await d1
        .update(schema.galleryAlbums)
        .set({
          titleId: input.titleId,
          titleJa: input.titleJa || null,
          slug: cleanSlug,
          descriptionId: input.descriptionId || null,
          descriptionJa: input.descriptionJa || null,
          coverMediaId: input.coverMediaId || null,
          isPublished: input.isPublished,
          sortOrder: input.sortOrder,
          eventDate: input.eventDate || null,
          updatedAt: now,
        })
        .where(eq(schema.galleryAlbums.id, input.id));

      return {
        success: true,
        albumId: input.id,
      };
    },
  }),

  deleteAlbum: defineAction({
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
      // Delete child gallery items first
      await d1.delete(schema.galleryItems).where(eq(schema.galleryItems.albumId, input.id));
      await d1.delete(schema.galleryAlbums).where(eq(schema.galleryAlbums.id, input.id));

      return { success: true };
    },
  }),

  addGalleryItem: defineAction({
    input: z.object({
      albumId: z.string().min(1),
      mediaId: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      filename: z.string().optional().nullable(),
      captionId: z.string().optional().nullable(),
      captionJa: z.string().optional().nullable(),
      altText: z.string().optional().nullable(),
      sortOrder: z.number().default(0),
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
      let targetMediaId = input.mediaId;
      const now = new Date().toISOString();

      // If user provided a new direct image URL instead of selecting from library
      if (!targetMediaId && input.imageUrl) {
        targetMediaId = crypto.randomUUID();
        await d1.insert(schema.media).values({
          id: targetMediaId,
          provider: 'imgbb',
          providerImageId: null,
          originalUrl: input.imageUrl,
          displayUrl: input.imageUrl,
          thumbnailUrl: input.imageUrl,
          filename: input.filename || `foto-${Date.now()}.webp`,
          mimeType: 'image/jpeg',
          fileSize: 0,
          altText: input.altText || null,
          createdAt: now,
        });
      }

      if (!targetMediaId) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Pilih media dari library atau masukkan URL gambar.',
        });
      }

      const itemId = crypto.randomUUID();
      await d1.insert(schema.galleryItems).values({
        id: itemId,
        albumId: input.albumId,
        mediaId: targetMediaId,
        captionId: input.captionId || null,
        captionJa: input.captionJa || null,
        altText: input.altText || null,
        sortOrder: input.sortOrder,
        createdAt: now,
      });

      return {
        success: true,
        itemId,
      };
    },
  }),

  deleteGalleryItem: defineAction({
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
      await d1.delete(schema.galleryItems).where(eq(schema.galleryItems.id, input.id));

      return { success: true };
    },
  }),
};
