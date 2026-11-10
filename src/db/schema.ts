import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').notNull().default('super_admin'),
  isActive: integer('is_active').notNull().default(1),
  lastLoginAt: text('last_login_at'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
  updatedAt: text('updated_at').notNull().default(sql`(datetime('now'))`),
});

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  tokenHash: text('token_hash').notNull().unique(),
  expiresAt: text('expires_at').notNull(),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
});

export const media = sqliteTable('media', {
  id: text('id').primaryKey(),
  provider: text('provider').notNull().default('imgbb'),
  providerImageId: text('provider_image_id'),
  originalUrl: text('original_url').notNull(),
  displayUrl: text('display_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  filename: text('filename').notNull(),
  mimeType: text('mime_type').notNull(),
  fileSize: integer('file_size').notNull(),
  width: integer('width'),
  height: integer('height'),
  altText: text('alt_text'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
});

export const categories = sqliteTable('categories', {
  id: text('id').primaryKey(),
  nameId: text('name_id').notNull(),
  nameJa: text('name_ja'),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
});

export const tags = sqliteTable('tags', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
});

export const posts = sqliteTable('posts', {
  id: text('id').primaryKey(),
  authorId: text('author_id').notNull().references(() => users.id),
  titleId: text('title_id').notNull(),
  titleJa: text('title_ja'),
  slug: text('slug').notNull().unique(),
  excerptId: text('excerpt_id').notNull(),
  excerptJa: text('excerpt_ja'),
  contentId: text('content_id').notNull(),
  contentJa: text('content_ja'),
  coverMediaId: text('cover_media_id').references(() => media.id, { onDelete: 'set null' }),
  status: text('status').notNull().default('draft'),
  seoTitleId: text('seo_title_id'),
  seoTitleJa: text('seo_title_ja'),
  metaDescriptionId: text('meta_description_id'),
  metaDescriptionJa: text('meta_description_ja'),
  viewCount: integer('view_count').notNull().default(0),
  publishedAt: text('published_at'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
  updatedAt: text('updated_at').notNull().default(sql`(datetime('now'))`),
});

export const postCategories = sqliteTable('post_categories', {
  postId: text('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
  categoryId: text('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
}, (table) => [
  primaryKey({ columns: [table.postId, table.categoryId] }),
]);

export const postTags = sqliteTable('post_tags', {
  postId: text('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
  tagId: text('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
}, (table) => [
  primaryKey({ columns: [table.postId, table.tagId] }),
]);

export const galleryAlbums = sqliteTable('gallery_albums', {
  id: text('id').primaryKey(),
  titleId: text('title_id').notNull(),
  titleJa: text('title_ja'),
  slug: text('slug').notNull().unique(),
  descriptionId: text('description_id'),
  descriptionJa: text('description_ja'),
  coverMediaId: text('cover_media_id').references(() => media.id, { onDelete: 'set null' }),
  isPublished: integer('is_published').notNull().default(1),
  sortOrder: integer('sort_order').notNull().default(0),
  eventDate: text('event_date'),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
  updatedAt: text('updated_at').notNull().default(sql`(datetime('now'))`),
});

export const galleryItems = sqliteTable('gallery_items', {
  id: text('id').primaryKey(),
  albumId: text('album_id').notNull().references(() => galleryAlbums.id, { onDelete: 'cascade' }),
  mediaId: text('media_id').notNull().references(() => media.id, { onDelete: 'restrict' }),
  captionId: text('caption_id'),
  captionJa: text('caption_ja'),
  altText: text('alt_text'),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: text('created_at').notNull().default(sql`(datetime('now'))`),
});

export const settings = sqliteTable('settings', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
  updatedAt: text('updated_at').notNull().default(sql`(datetime('now'))`),
});
