import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '../db/client';

export const postsActions = {
  createPost: defineAction({
    input: z.object({
      titleId: z.string().min(3, 'Judul Indonesia minimal 3 karakter'),
      titleJa: z.string().optional().nullable(),
      slug: z.string().min(3, 'Slug URL minimal 3 karakter'),
      excerptId: z.string().min(10, 'Ringkasan minimal 10 karakter'),
      excerptJa: z.string().optional().nullable(),
      contentId: z.string().min(10, 'Konten artikel wajib diisi'),
      contentJa: z.string().optional().nullable(),
      coverMediaId: z.string().optional().nullable(),
      categoryId: z.string().optional().nullable(),
      status: z.enum(['draft', 'published']).default('draft'),
      seoTitleId: z.string().optional().nullable(),
      seoTitleJa: z.string().optional().nullable(),
      metaDescriptionId: z.string().optional().nullable(),
      metaDescriptionJa: z.string().optional().nullable(),
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
      const postId = crypto.randomUUID();
      const now = new Date().toISOString();
      const publishedAt = input.status === 'published' ? now : null;

      // Clean slug
      const cleanSlug = input.slug
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

      // Check unique slug
      const existing = await d1
        .select({ id: schema.posts.id })
        .from(schema.posts)
        .where(eq(schema.posts.slug, cleanSlug))
        .limit(1);

      if (existing.length > 0) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: `Slug "${cleanSlug}" sudah digunakan oleh artikel lain.`,
        });
      }

      await d1.insert(schema.posts).values({
        id: postId,
        authorId: user.id,
        titleId: input.titleId,
        titleJa: input.titleJa || null,
        slug: cleanSlug,
        excerptId: input.excerptId,
        excerptJa: input.excerptJa || null,
        contentId: input.contentId,
        contentJa: input.contentJa || null,
        coverMediaId: input.coverMediaId || null,
        status: input.status,
        seoTitleId: input.seoTitleId || null,
        seoTitleJa: input.seoTitleJa || null,
        metaDescriptionId: input.metaDescriptionId || null,
        metaDescriptionJa: input.metaDescriptionJa || null,
        publishedAt,
        createdAt: now,
        updatedAt: now,
      });

      if (input.categoryId) {
        await d1.insert(schema.postCategories).values({
          postId,
          categoryId: input.categoryId,
        });
      }

      return {
        success: true,
        postId,
        slug: cleanSlug,
      };
    },
  }),

  updatePost: defineAction({
    input: z.object({
      id: z.string().min(1, 'ID artikel diperlukan'),
      titleId: z.string().min(3, 'Judul Indonesia minimal 3 karakter'),
      titleJa: z.string().optional().nullable(),
      slug: z.string().min(3, 'Slug URL minimal 3 karakter'),
      excerptId: z.string().min(10, 'Ringkasan minimal 10 karakter'),
      excerptJa: z.string().optional().nullable(),
      contentId: z.string().min(10, 'Konten artikel wajib diisi'),
      contentJa: z.string().optional().nullable(),
      coverMediaId: z.string().optional().nullable(),
      categoryId: z.string().optional().nullable(),
      status: z.enum(['draft', 'published']),
      seoTitleId: z.string().optional().nullable(),
      seoTitleJa: z.string().optional().nullable(),
      metaDescriptionId: z.string().optional().nullable(),
      metaDescriptionJa: z.string().optional().nullable(),
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

      // Clean slug
      const cleanSlug = input.slug
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

      // Verify post exists
      const existing = await d1
        .select()
        .from(schema.posts)
        .where(eq(schema.posts.id, input.id))
        .limit(1);

      if (existing.length === 0) {
        throw new ActionError({
          code: 'NOT_FOUND',
          message: 'Artikel tidak ditemukan.',
        });
      }

      const currentPost = existing[0];
      let publishedAt = currentPost.publishedAt;
      if (input.status === 'published' && !publishedAt) {
        publishedAt = now;
      }

      await d1
        .update(schema.posts)
        .set({
          titleId: input.titleId,
          titleJa: input.titleJa || null,
          slug: cleanSlug,
          excerptId: input.excerptId,
          excerptJa: input.excerptJa || null,
          contentId: input.contentId,
          contentJa: input.contentJa || null,
          coverMediaId: input.coverMediaId || null,
          status: input.status,
          seoTitleId: input.seoTitleId || null,
          seoTitleJa: input.seoTitleJa || null,
          metaDescriptionId: input.metaDescriptionId || null,
          metaDescriptionJa: input.metaDescriptionJa || null,
          publishedAt,
          updatedAt: now,
        })
        .where(eq(schema.posts.id, input.id));

      // Update category link
      await d1.delete(schema.postCategories).where(eq(schema.postCategories.postId, input.id));
      if (input.categoryId) {
        await d1.insert(schema.postCategories).values({
          postId: input.id,
          categoryId: input.categoryId,
        });
      }

      return {
        success: true,
        postId: input.id,
        slug: cleanSlug,
      };
    },
  }),

  deletePost: defineAction({
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
      await d1.delete(schema.postCategories).where(eq(schema.postCategories.postId, input.id));
      await d1.delete(schema.postTags).where(eq(schema.postTags.postId, input.id));
      await d1.delete(schema.posts).where(eq(schema.posts.id, input.id));

      return { success: true };
    },
  }),

  togglePostStatus: defineAction({
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
      const postRes = await d1
        .select()
        .from(schema.posts)
        .where(eq(schema.posts.id, input.id))
        .limit(1);

      if (postRes.length === 0) {
        throw new ActionError({
          code: 'NOT_FOUND',
          message: 'Artikel tidak ditemukan.',
        });
      }

      const current = postRes[0];
      const newStatus = current.status === 'published' ? 'draft' : 'published';
      const now = new Date().toISOString();
      const publishedAt = newStatus === 'published' ? (current.publishedAt || now) : current.publishedAt;

      await d1
        .update(schema.posts)
        .set({
          status: newStatus,
          publishedAt,
          updatedAt: now,
        })
        .where(eq(schema.posts.id, input.id));

      return {
        success: true,
        newStatus,
      };
    },
  }),
};
