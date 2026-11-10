-- Migration: 0001_initial_schema.sql
-- Description: Inisialisasi tabel, index, dan foreign key constraints untuk LPK Saindo 2.0

PRAGMA foreign_keys = ON;

-- 1. Table users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'super_admin',
    is_active INTEGER NOT NULL DEFAULT 1,
    last_login_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 2. Table sessions
CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    token_hash TEXT NOT NULL UNIQUE,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_sessions_token_hash ON sessions(token_hash);
CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at);

-- 3. Table media
CREATE TABLE IF NOT EXISTS media (
    id TEXT PRIMARY KEY,
    provider TEXT NOT NULL DEFAULT 'imgbb',
    provider_image_id TEXT,
    original_url TEXT NOT NULL,
    display_url TEXT NOT NULL,
    thumbnail_url TEXT,
    filename TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    width INTEGER,
    height INTEGER,
    alt_text TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_media_created_at ON media(created_at);

-- 4. Table categories
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name_id TEXT NOT NULL,
    name_ja TEXT,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- 5. Table tags
CREATE TABLE IF NOT EXISTS tags (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_tags_slug ON tags(slug);

-- 6. Table posts
CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    author_id TEXT NOT NULL,
    title_id TEXT NOT NULL,
    title_ja TEXT,
    slug TEXT NOT NULL UNIQUE,
    excerpt_id TEXT NOT NULL,
    excerpt_ja TEXT,
    content_id TEXT NOT NULL,
    content_ja TEXT,
    cover_media_id TEXT,
    status TEXT NOT NULL DEFAULT 'draft',
    seo_title_id TEXT,
    seo_title_ja TEXT,
    meta_description_id TEXT,
    meta_description_ja TEXT,
    view_count INTEGER NOT NULL DEFAULT 0,
    published_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (cover_media_id) REFERENCES media(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at);

-- 7. Table post_categories
CREATE TABLE IF NOT EXISTS post_categories (
    post_id TEXT NOT NULL,
    category_id TEXT NOT NULL,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- 8. Table post_tags
CREATE TABLE IF NOT EXISTS post_tags (
    post_id TEXT NOT NULL,
    tag_id TEXT NOT NULL,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

-- 9. Table gallery_albums
CREATE TABLE IF NOT EXISTS gallery_albums (
    id TEXT PRIMARY KEY,
    title_id TEXT NOT NULL,
    title_ja TEXT,
    slug TEXT NOT NULL UNIQUE,
    description_id TEXT,
    description_ja TEXT,
    cover_media_id TEXT,
    is_published INTEGER NOT NULL DEFAULT 1,
    sort_order INTEGER NOT NULL DEFAULT 0,
    event_date TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (cover_media_id) REFERENCES media(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_gallery_albums_slug ON gallery_albums(slug);
CREATE INDEX IF NOT EXISTS idx_gallery_albums_published ON gallery_albums(is_published);

-- 10. Table gallery_items
CREATE TABLE IF NOT EXISTS gallery_items (
    id TEXT PRIMARY KEY,
    album_id TEXT NOT NULL,
    media_id TEXT NOT NULL,
    caption_id TEXT,
    caption_ja TEXT,
    alt_text TEXT,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (album_id) REFERENCES gallery_albums(id) ON DELETE CASCADE,
    FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE RESTRICT
);

CREATE INDEX IF NOT EXISTS idx_gallery_items_album_id ON gallery_items(album_id);

-- 11. Table settings
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
