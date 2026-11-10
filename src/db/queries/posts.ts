import { eq, desc, and } from 'drizzle-orm';
import { getDb, schema } from '../client';

export interface PostListItem {
  id: string;
  slug: string;
  titleId: string;
  titleJa: string | null;
  excerptId: string;
  excerptJa: string | null;
  status: string;
  publishedAt: string | null;
  viewCount: number;
  coverUrl: string | null;
  categoryNameId: string | null;
  categoryNameJa: string | null;
  categorySlug: string | null;
}

export async function getPublishedPosts(d1: D1Database, limit = 10, offset = 0): Promise<PostListItem[]> {
  const db = getDb(d1);
  const rows = await db
    .select({
      id: schema.posts.id,
      slug: schema.posts.slug,
      titleId: schema.posts.titleId,
      titleJa: schema.posts.titleJa,
      excerptId: schema.posts.excerptId,
      excerptJa: schema.posts.excerptJa,
      status: schema.posts.status,
      publishedAt: schema.posts.publishedAt,
      viewCount: schema.posts.viewCount,
      coverUrl: schema.media.displayUrl,
      categoryNameId: schema.categories.nameId,
      categoryNameJa: schema.categories.nameJa,
      categorySlug: schema.categories.slug,
    })
    .from(schema.posts)
    .leftJoin(schema.media, eq(schema.posts.coverMediaId, schema.media.id))
    .leftJoin(schema.postCategories, eq(schema.posts.id, schema.postCategories.postId))
    .leftJoin(schema.categories, eq(schema.postCategories.categoryId, schema.categories.id))
    .where(eq(schema.posts.status, 'published'))
    .orderBy(desc(schema.posts.publishedAt))
    .limit(limit)
    .offset(offset);

  return rows;
}

export async function getPostBySlug(d1: D1Database, slug: string) {
  const db = getDb(d1);
  const rows = await db
    .select({
      post: schema.posts,
      cover: schema.media,
      author: schema.users,
      category: schema.categories,
    })
    .from(schema.posts)
    .leftJoin(schema.media, eq(schema.posts.coverMediaId, schema.media.id))
    .leftJoin(schema.users, eq(schema.posts.authorId, schema.users.id))
    .leftJoin(schema.postCategories, eq(schema.posts.id, schema.postCategories.postId))
    .leftJoin(schema.categories, eq(schema.postCategories.categoryId, schema.categories.id))
    .where(and(eq(schema.posts.slug, slug), eq(schema.posts.status, 'published')))
    .limit(1);

  if (rows.length === 0) return null;

  return rows[0];
}

export async function getRecentPosts(d1: D1Database, limit = 3): Promise<PostListItem[]> {
  return getPublishedPosts(d1, limit, 0);
}

export async function getAllCategories(d1: D1Database) {
  const db = getDb(d1);
  return db.select().from(schema.categories).all();
}
