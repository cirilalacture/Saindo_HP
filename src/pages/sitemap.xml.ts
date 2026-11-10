import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '../db/client';

export const GET: APIRoute = async ({ locals }) => {
  const baseUrl = 'https://lpksaindo.com';
  const db = locals.runtime?.env?.DB;

  const staticPages = [
    '',
    '/about',
    '/programs',
    '/gallery',
    '/blog',
    '/contact',
    '/ja',
    '/ja/about',
    '/ja/programs',
    '/ja/gallery',
    '/ja/blog',
    '/ja/contact',
  ];

  let postUrls: string[] = [];
  let albumUrls: string[] = [];

  if (db) {
    try {
      const d1 = getDb(db);
      const posts = await d1
        .select({ slug: schema.posts.slug })
        .from(schema.posts)
        .where(eq(schema.posts.status, 'published'));

      postUrls = posts.flatMap((p) => [`/blog/${p.slug}`, `/ja/blog/${p.slug}`]);

      const albums = await d1
        .select({ slug: schema.galleryAlbums.slug })
        .from(schema.galleryAlbums)
        .where(eq(schema.galleryAlbums.isPublished, 1));

      albumUrls = albums.flatMap((a) => [`/gallery/${a.slug}`, `/ja/gallery/${a.slug}`]);
    } catch (err) {
      console.error('Failed to query sitemap dynamic URLs:', err);
    }
  }

  const allUrls = [...staticPages, ...postUrls, ...albumUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>${url === '' || url === '/ja' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' || url === '/ja' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
