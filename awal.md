# LPK SAINDO WEBSITE 2.0
## Product Requirements Document & Technical Specification

**Project:** LPK Saindo Website 2.0  
**Product Type:** Company Profile, Education Website & Content Management System  
**Design Direction:** Japanese Corporate Minimalist  
**Primary Language:** Bahasa Indonesia  
**Secondary Language:** 日本語 (Japanese)  
**Deployment:** Cloudflare Workers  
**Database:** Cloudflare D1  
**Image Hosting:** Local Project Assets + ImgBB  
**Architecture:** Astro Fullstack  
**Status:** Approved Blueprint – Ready for Development

---

# PART 1 — PRODUCT REQUIREMENTS DOCUMENT (PRD)

## 1. Project Overview

LPK Saindo Website 2.0 merupakan pembangunan ulang website resmi LPK Saindo dengan pendekatan modern, profesional, minimalis, dan berorientasi pada branding lembaga serta peningkatan pendaftaran peserta pelatihan.

Website terdiri dari dua bagian utama:

1. Public Website: website yang dapat diakses oleh calon siswa, orang tua, alumni, mitra, dan masyarakat umum.
2. Admin CMS: dashboard internal untuk mengelola artikel blog, galeri, media, dan konfigurasi website.

Website dibangun sebagai aplikasi fullstack menggunakan Astro dan di-deploy dalam satu Cloudflare Worker.

## 2. Business Objectives

Tujuan utama:

- Memperkuat citra profesional LPK Saindo.
- Meningkatkan kepercayaan calon peserta dan orang tua.
- Menyediakan informasi program pelatihan secara terstruktur.
- Mempermudah calon peserta menghubungi lembaga.
- Menyediakan blog untuk publikasi berita dan informasi.
- Menampilkan dokumentasi kegiatan melalui galeri.
- Memungkinkan pengelolaan konten tanpa mengubah source code.

## 3. Target Users

### A. Calon peserta pelatihan
Membutuhkan informasi mengenai program, persyaratan, proses pendaftaran, dan kegiatan LPK.

### B. Orang tua / wali
Membutuhkan informasi lembaga, fasilitas, legalitas, program, dan kredibilitas.

### C. Alumni
Membutuhkan informasi kegiatan, berita, dan dokumentasi.

### D. Admin LPK Saindo
Membutuhkan sistem untuk mengelola konten website secara mandiri.

## 4. Product Scope

### 4.1 Public Website

| Modul | Requirement |
|---|---|
| Homepage | Hero, profil, keunggulan, program, galeri, testimoni, CTA |
| About | Profil, visi, misi, fasilitas, staff |
| Programs | Daftar program pelatihan |
| Program Detail | Informasi detail masing-masing program |
| Gallery | Album dan dokumentasi kegiatan |
| Blog | Daftar artikel dan kategori |
| Blog Detail | Halaman artikel lengkap |
| Contact | Alamat, WhatsApp, peta, sosial media |
| Language | Indonesia dan Jepang |
| SEO | Metadata, sitemap, canonical, hreflang |

### 4.2 Admin CMS

| Modul | Requirement |
|---|---|
| Login | Login admin tunggal |
| Dashboard | Ringkasan statistik konten |
| Blog Management | Create, Read, Update, Delete |
| Rich Text Editor | TipTap editor |
| Categories | Pengelolaan kategori |
| Tags | Pengelolaan tag |
| Gallery Albums | Pengelolaan album |
| Gallery Items | Pengelolaan foto |
| Media Library | Pengelolaan gambar ImgBB |
| Website Settings | Pengaturan identitas, kontak, SEO |
| Session Management | Login, logout, expiry session |

## 5. Functional Requirements

### FR-01: Homepage

Homepage harus menampilkan:

1. Navigation bar.
2. Hero section.
3. Introduction / About.
4. Trust indicators.
5. Program unggulan.
6. Why Choose Saindo.
7. Learning Journey.
8. Gallery preview.
9. Alumni testimonials.
10. Latest blog articles.
11. Call to Action.
12. Footer.

Konten identitas utama seperti foto hero dan staff menggunakan aset project.

### FR-02: Blog System

Admin dapat:

- Membuat artikel.
- Mengedit artikel.
- Menghapus artikel.
- Menyimpan artikel sebagai draft.
- Menerbitkan artikel.
- Menambahkan cover image.
- Menambahkan gambar di isi artikel.
- Memilih kategori.
- Menambahkan tag.
- Mengatur SEO title dan description.
- Menyediakan terjemahan Jepang secara opsional.

Konten artikel disimpan dalam format JSON TipTap.

Artikel harus memiliki slug unik.

Status artikel:
- draft
- published

Artikel draft tidak boleh dapat diakses pengunjung melalui halaman publik.

### FR-03: Gallery System

Admin dapat:

- Membuat album.
- Mengedit album.
- Menghapus album.
- Mengunggah banyak foto.
- Mengatur urutan foto.
- Mengatur cover album.
- Menambahkan caption dan alt text.
- Mempublikasikan atau menyembunyikan album.

Foto dinamis disimpan di ImgBB.

### FR-04: Media Library

Media library berfungsi sebagai pusat pengelolaan gambar dinamis.

Informasi media:
- Nama file.
- Provider.
- Provider image ID.
- URL gambar.
- Thumbnail URL.
- Format file.
- Ukuran file.
- Dimensi gambar.
- Alt text.
- Tanggal upload.

### FR-05: Admin Authentication

Sistem hanya menyediakan satu akun Super Admin.

Persyaratan:
- Tidak ada registrasi admin publik.
- Admin pertama dibuat melalui script CLI.
- Password harus disimpan dalam bentuk hash.
- Session menggunakan cookie HttpOnly, Secure, dan SameSite.
- Session memiliki masa berlaku.
- Endpoint/action privat wajib memverifikasi autentikasi.
- Login memiliki pembatasan percobaan.

### FR-06: Bilingual System

Bahasa default: Indonesia.

Bahasa alternatif: Jepang.

Struktur URL:
- `/` — Homepage Indonesia.
- `/about` — Tentang Saindo.
- `/programs` — Program.
- `/blog` — Blog.
- `/ja/` — Homepage Jepang.
- `/ja/about` — Tentang Saindo dalam bahasa Jepang.
- `/ja/programs` — Program bahasa Jepang.
- `/ja/blog` — Blog bahasa Jepang.

Jika terjemahan artikel Jepang belum tersedia, website tidak boleh menampilkan konten bahasa Indonesia seolah-olah itu terjemahan Jepang. Sediakan fallback atau tautan kembali ke versi Indonesia.

## 6. Non-Functional Requirements

### Performance
- Mobile-first.
- Gambar WebP untuk aset lokal.
- Lazy loading untuk gambar non-hero.
- Responsive images jika tersedia.
- Minimalkan JavaScript pada halaman publik.
- Optimasi Core Web Vitals.

### Security
- Password hashing.
- Secure session cookies.
- CSRF protection.
- Validasi input server-side.
- Sanitasi konten rich text.
- Pembatasan ukuran dan tipe file.
- Secret disimpan menggunakan Cloudflare Worker Secrets.
- Tidak ada kredensial di frontend.
- Tidak ada halaman registrasi publik.

### SEO
- Unique title dan meta description.
- Open Graph metadata.
- Sitemap XML.
- Robots.txt.
- Canonical URL.
- hreflang id dan ja.
- Structured data Organization, Article, dan BreadcrumbList jika sesuai.

### Accessibility
- Alt text pada gambar.
- Kontras warna memadai.
- Navigasi keyboard.
- Semantic HTML.
- Label pada form.

## 7. Out of Scope — Initial Release

Fitur berikut tidak termasuk versi pertama:

- Pembayaran online.
- Sistem penerimaan siswa lengkap.
- Portal siswa.
- Login alumni.
- Multi-admin.
- Komentar blog.
- Chat realtime.
- Integrasi WhatsApp API.
- Sistem penempatan kerja otomatis.

Fitur tersebut dapat ditambahkan dalam pengembangan berikutnya.

## 8. Success Metrics

Indikator keberhasilan:

- Website berjalan di Cloudflare Workers.
- Semua halaman publik responsif.
- Admin dapat mengelola blog tanpa coding.
- Admin dapat mengelola album dan foto.
- Artikel yang dipublikasikan dapat diakses publik.
- Bahasa Indonesia dan Jepang berjalan.
- Tidak ada akses publik ke dashboard privat.
- Gambar lokal dan ImgBB dapat dimuat dengan baik.
- Website memiliki metadata SEO yang benar.

---

# PART 2 — TECHNICAL ARCHITECTURE & DATABASE SCHEME

## 1. Technology Stack

| Layer | Technology |
|---|---|
| Fullstack Framework | Astro |
| UI Components | Astro Components |
| Interactive Components | React |
| Styling | Tailwind CSS |
| Rich Text Editor | TipTap |
| Database | Cloudflare D1 |
| Database Access | Drizzle ORM / D1 Prepared Statements |
| Image Hosting | ImgBB |
| Hosting | Cloudflare Workers |
| Version Control | Git |
| Package Manager | npm |

## 2. Application Architecture

Tidak menggunakan Hono atau backend API service terpisah.

Astro menangani:
- Server-side rendering.
- Public pages.
- Admin pages.
- Server Actions.
- Database access.
- Authentication.
- Image upload processing.
- Form processing.

Cloudflare Worker menyediakan runtime untuk aplikasi Astro.

Cloudflare D1 menyediakan database.

ImgBB menyediakan penyimpanan foto dinamis.

### Application Flow

Visitor:
Browser → Cloudflare Worker → Astro SSR → D1 → HTML Response.

Admin:
Browser → Astro Admin → Astro Actions → Authentication Check → D1 / ImgBB.

Tidak ada backend service terpisah.

## 3. Project Directory Structure

```text
lpksaindo/
│
├── public/
│   ├── assets/
│   │   ├── logo/
│   │   ├── images/
│   │   ├── staff/
│   │   └── icons/
│   └── favicon.svg
│
├── src/
│   ├── actions/
│   │   └── index.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── blog/
│   │   ├── gallery/
│   │   └── ui/
│   │
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── AdminLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── programs/
│   │   ├── gallery/
│   │   ├── blog/
│   │   ├── contact.astro
│   │   ├── ja/
│   │   └── admin/
│   │
│   ├── db/
│   │   ├── schema.ts
│   │   └── queries/
│   │
│   ├── server/
│   │   ├── auth/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── validation/
│   │   └── security/
│   │
│   ├── admin/
│   │   ├── components/
│   │   └── editor/
│   │       └── RichTextEditor.tsx
│   │
│   ├── i18n/
│   │   ├── id.json
│   │   └── ja.json
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── middleware.ts
│   └── env.d.ts
│
├── migrations/
│   └── 0001_initial_schema.sql
│
├── scripts/
│   └── create-admin.mjs
│
├── astro.config.mjs
├── wrangler.jsonc
├── drizzle.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 4. Database Design

Database name: `lpksaindo_db`

### Table 1: users

| Column | Type | Description |
|---|---|---|
| id | TEXT | Primary key |
| name | TEXT | Admin name |
| email | TEXT | Unique email |
| password_hash | TEXT | Password hash |
| role | TEXT | super_admin |
| is_active | INTEGER | Account status |
| last_login_at | TEXT | Last login |
| created_at | TEXT | Creation timestamp |
| updated_at | TEXT | Update timestamp |

### Table 2: sessions

| Column | Type |
|---|---|
| id | TEXT PRIMARY KEY |
| user_id | TEXT |
| token_hash | TEXT UNIQUE |
| expires_at | TEXT |
| created_at | TEXT |

Session token asli hanya disimpan di cookie browser. Database hanya menyimpan hash token.

### Table 3: posts

| Column | Type | Description |
|---|---|---|
| id | TEXT | Primary key |
| author_id | TEXT | Admin reference |
| title_id | TEXT | Indonesian title |
| title_ja | TEXT | Japanese title |
| slug | TEXT UNIQUE | Article URL |
| excerpt_id | TEXT | Indonesian excerpt |
| excerpt_ja | TEXT | Japanese excerpt |
| content_id | TEXT | TipTap JSON |
| content_ja | TEXT | Japanese TipTap JSON |
| cover_media_id | TEXT | Cover image |
| status | TEXT | draft / published |
| seo_title_id | TEXT | Indonesian SEO title |
| seo_title_ja | TEXT | Japanese SEO title |
| meta_description_id | TEXT | Indonesian description |
| meta_description_ja | TEXT | Japanese description |
| view_count | INTEGER | Article views |
| published_at | TEXT | Publish timestamp |
| created_at | TEXT | Creation timestamp |
| updated_at | TEXT | Update timestamp |

### Table 4: categories

- id
- name_id
- name_ja
- slug
- description
- created_at

### Table 5: post_categories

- post_id
- category_id

Composite primary key: post_id + category_id.

### Table 6: tags

- id
- name
- slug

### Table 7: post_tags

- post_id
- tag_id

Composite primary key: post_id + tag_id.

### Table 8: media

- id
- provider
- provider_image_id
- original_url
- display_url
- thumbnail_url
- filename
- mime_type
- file_size
- width
- height
- alt_text
- created_at

### Table 9: gallery_albums

- id
- title_id
- title_ja
- slug
- description_id
- description_ja
- cover_media_id
- is_published
- sort_order
- event_date
- created_at
- updated_at

### Table 10: gallery_items

- id
- album_id
- media_id
- caption_id
- caption_ja
- alt_text
- sort_order
- created_at

### Table 11: settings

- key
- value
- updated_at

Setting keys include:
- site_name
- default_language
- supported_languages
- whatsapp_number
- contact_email
- address
- instagram_url
- facebook_url
- youtube_url
- tiktok_url
- seo_title
- seo_description

### Database Relationships

```text
users
  │
  ├── sessions
  │
  └── posts
        │
        ├── post_categories ── categories
        │
        ├── post_tags ──────── tags
        │
        └── cover_media_id ─── media

gallery_albums
  │
  ├── cover_media_id ───────── media
  │
  └── gallery_items
         │
         └── media
```

### Database Rules

1. Gunakan TEXT UUID untuk primary key.
2. Gunakan foreign keys untuk relasi.
3. Aktifkan foreign key enforcement.
4. Gunakan index untuk slug, status, tanggal publikasi, dan relasi album.
5. Jangan menyimpan gambar binary ke D1.
6. Konten TipTap disimpan sebagai JSON valid.
7. Artikel draft tidak muncul di halaman publik.
8. Media yang masih digunakan tidak boleh dihapus.
9. Waktu publikasi disimpan dalam format UTC ISO 8601.
10. Semua perubahan database dilakukan melalui migration berversi.

## 5. Image Storage Architecture

### A. Local Assets

Disimpan dalam project:

```text
public/assets/
├── logo/
├── images/
│   ├── hero.webp
│   ├── about.webp
│   ├── classroom.webp
│   └── facility.webp
└── staff/
    ├── director.webp
    ├── staff-01.webp
    └── staff-02.webp
```

Digunakan untuk:
- Logo.
- Hero image.
- Foto staff.
- Foto pimpinan.
- Foto fasilitas utama.
- Visual identitas tetap.

### B. ImgBB

Digunakan untuk:
- Blog cover.
- Blog content images.
- Gallery images.
- Dokumentasi kegiatan.

Flow:

Admin Upload → Server Validation → ImgBB Upload → Save Metadata to D1 → Render Image.

Ketentuan:
- Maksimal upload aplikasi 8 MB per gambar.
- MIME type divalidasi.
- Alt text disediakan.
- Simpan provider image ID.
- Jangan mengirim API key ke browser.
- Jangan menyimpan delete URL sensitif ke database dalam bentuk terbuka.
- Sediakan mekanisme media usage check sebelum penghapusan.

---

# PART 3 — IMPLEMENTATION PLAN

## Phase 1: Foundation & Project Setup

Tasks:
- Inisialisasi project Astro.
- Setup TypeScript.
- Setup React.
- Setup Tailwind CSS.
- Setup Cloudflare adapter.
- Setup Wrangler.
- Setup D1.
- Buat migration awal.
- Setup environment types.
- Setup project Git.

Deliverables:
- Project dapat berjalan lokal.
- D1 lokal dapat diakses.
- Project berhasil di-build.
- Worker dapat dijalankan dalam mode preview.

Acceptance Criteria:
- Tidak ada build error.
- D1 binding bekerja.
- Struktur folder sesuai dokumentasi.
- Deployment test berhasil.

## Phase 2: Design System & Public Homepage

Tasks:
- Setup typography.
- Setup color palette.
- Setup spacing.
- Setup buttons.
- Setup navbar.
- Setup footer.
- Setup mobile navigation.
- Implementasi hero.
- Implementasi seluruh homepage sections.

Deliverables:
- Homepage desktop.
- Homepage mobile.
- Reusable component library.

Acceptance Criteria:
- Tampilan sesuai Japanese Corporate Minimalist.
- Seluruh section responsif.
- CTA WhatsApp berfungsi.
- Gambar menggunakan aset lokal yang sesuai.

## Phase 3: Public Pages

Tasks:
- About page.
- Program listing.
- Program detail.
- Gallery listing.
- Gallery album detail.
- Blog listing.
- Blog detail.
- Contact page.
- Bilingual routing.

Deliverables:
- Semua halaman publik berjalan.
- Konten memiliki struktur konsisten.
- SEO metadata diterapkan.

Acceptance Criteria:
- Tidak ada broken links.
- Navigasi berjalan.
- Pagination blog berjalan.
- Album dan artikel dapat ditampilkan.
- Bahasa Jepang hanya menampilkan konten yang tersedia.

## Phase 4: Authentication & Admin CMS

Tasks:
- Setup admin creation script.
- Setup password hashing.
- Setup login.
- Setup session.
- Setup logout.
- Setup auth middleware.
- Setup dashboard layout.
- Setup protected pages.
- Setup dashboard overview.

Deliverables:
- Single Admin authentication.
- Dashboard internal.

Acceptance Criteria:
- Tidak ada registrasi publik.
- Halaman privat terlindungi.
- Session expiry bekerja.
- Logout mencabut session.
- Request tanpa autentikasi ditolak.

## Phase 5: Blog CMS

Tasks:
- Setup TipTap.
- Blog listing admin.
- Create article.
- Edit article.
- Delete article.
- Draft status.
- Publish status.
- Category management.
- Tag management.
- SEO fields.
- Indonesian and Japanese content.

Deliverables:
- Blog CMS lengkap.

Acceptance Criteria:
- Admin dapat membuat dan mengedit artikel.
- JSON TipTap dapat disimpan dan dimuat kembali.
- Artikel draft tidak tampil di publik.
- Artikel published dapat diakses melalui slug.
- SEO metadata tersedia.

## Phase 6: Gallery & Media Library

Tasks:
- Setup ImgBB integration.
- Upload image.
- Media library.
- Album management.
- Gallery item management.
- Sorting.
- Cover album.
- Image deletion checks.

Deliverables:
- Gallery CMS.
- Media library.

Acceptance Criteria:
- Foto berhasil diunggah.
- Metadata masuk D1.
- Album dapat diterbitkan.
- Foto dapat diurutkan.
- Media yang masih digunakan tidak dapat dihapus.

## Phase 7: Website Settings

Tasks:
- Website identity.
- Contact settings.
- WhatsApp settings.
- Social media settings.
- Address settings.
- SEO settings.
- Language settings.

Deliverables:
- Settings dashboard.

Acceptance Criteria:
- Pengaturan dapat diubah tanpa mengedit kode.
- Perubahan tampil pada website publik.

## Phase 8: Quality Assurance & Deployment

Tasks:
- Mobile testing.
- Desktop testing.
- Authentication testing.
- Database testing.
- Upload testing.
- SEO testing.
- Performance testing.
- Cloudflare deployment.
- Production environment setup.
- Backup preparation.

Deliverables:
- Production-ready website.

Acceptance Criteria:
- Tidak ada error kritis.
- Semua fitur utama bekerja.
- Website dapat diakses melalui domain resmi.
- Dashboard terlindungi.
- Database production telah dimigrasikan.
- Secrets telah dikonfigurasi.

## Development Priority

| Priority | Phase |
|---|---|
| P0 | Foundation |
| P0 | Design System |
| P0 | Homepage |
| P1 | Public Pages |
| P1 | Authentication |
| P1 | Blog CMS |
| P1 | Gallery CMS |
| P2 | Settings |
| P2 | QA & Deployment |

---

# PART 4 — DESIGN SYSTEM & UI SPECIFICATION

## 1. Design Direction

**Japanese Corporate Minimalist**

Design keywords:
- Elegant.
- Minimalist.
- Premium.
- Editorial.
- Professional.
- Japanese-inspired.
- International education.

Referensi visual: perpaduan desain perusahaan Jepang modern, institusi pendidikan internasional, dan editorial magazine Jepang.

Tidak menggunakan desain yang terlalu ramai atau terlalu banyak ornamen tradisional.

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| Japan Red | #B91C2C | Primary accent |
| Deep Red | #991B1B | Hover / emphasis |
| Charcoal | #171717 | Heading |
| Off White | #F5F4F0 | Section background |
| White | #FFFFFF | Main background |
| Stone | #A7A7A0 | Secondary text |
| Light Gray | #E7E5E4 | Border |

## 3. Typography

| Usage | Font |
|---|---|
| Main Heading | Manrope |
| Body Text | Inter |
| Japanese Text | Noto Sans JP |
| Editorial Accent | Manrope |

Heading:
- Tegas.
- Besar.
- Tidak terlalu tebal.
- Line height relatif rapat.

Body:
- Mudah dibaca.
- Line height lega.
- Panjang paragraf dibatasi agar nyaman dibaca.

## 4. Layout Principles

- Max content width: 1200–1280px.
- Main section spacing: 96–120px desktop.
- Mobile spacing: 56–72px.
- Card radius: 8–14px.
- Button radius: 6–8px.
- Consistent grid.
- Large photography.
- Asymmetric editorial layouts pada section tertentu.
- Mobile-first responsive behavior.

## 5. Homepage Structure

### Section 01 — Navigation

Logo kiri.

Menu:
- Beranda
- Tentang Kami
- Program
- Galeri
- Blog
- Kontak

CTA:
Daftar Sekarang.

Language selector:
ID / 日本語.

Navbar sticky.

### Section 02 — Hero

Headline:

"Masa Depanmu Dimulai dari Sini. Melangkah Bersama Saindo Menuju Jepang."

Supporting text:

"Persiapkan kemampuan bahasa, keterampilan, dan mentalitas untuk membangun karier di Jepang bersama LPK Saindo."

CTA:
- Daftar Sekarang.
- Pelajari Program.

Visual:
Foto siswa atau kegiatan LPK Saindo yang autentik.

### Section 03 — Introduction

Heading:

"Mempersiapkan Generasi Siap Kerja di Jepang."

Berisi:
- Profil singkat.
- Deskripsi lembaga.
- Foto kegiatan.
- Link ke halaman About.

### Section 04 — Trust Indicators

Tampilkan informasi terverifikasi:
- Jumlah alumni.
- Jumlah peserta.
- Pengalaman lembaga.
- Mitra.

Jangan menggunakan angka fiktif.

### Section 05 — Programs

Heading:

"Choose Your Path. Build Your Future."

Program:
- Japanese Language.
- Skill Training.
- Interview Preparation.
- Japanese Culture.

Setiap program memiliki image, deskripsi, dan detail link.

### Section 06 — Why Saindo

Split layout.

Foto besar di satu sisi, informasi keunggulan di sisi lain.

Heading:

"Why Saindo?"

Tampilkan keunggulan yang benar-benar dimiliki lembaga.

### Section 07 — Learning Journey

Timeline:
1. Registration.
2. Language Learning.
3. Skill Development.
4. Selection.
5. Preparation.

Tahapan disesuaikan dengan proses aktual LPK Saindo.

### Section 08 — Gallery Preview

Heading:

"Life at Saindo."

Tampilan editorial masonry/asymmetric grid.

Tampilkan beberapa foto terbaru dan tombol menuju halaman Gallery.

### Section 09 — Alumni Stories

Heading:

"Their Journey, Their Story."

Tampilkan:
- Foto alumni.
- Nama.
- Program.
- Testimoni.
- Pengalaman setelah pelatihan.

Hanya menggunakan testimoni asli.

### Section 10 — Latest Articles

Heading:

"Latest News & Insights."

Menampilkan tiga artikel terbaru:
- Thumbnail.
- Kategori.
- Tanggal.
- Judul.
- Excerpt.
- Link artikel.

### Section 11 — CTA

Heading:

"Start Your Journey with Saindo."

CTA:
Konsultasi Sekarang via WhatsApp.

### Section 12 — Footer

- Logo.
- Deskripsi.
- Navigasi.
- Kontak.
- Alamat.
- Social media.
- Copyright.

## 6. Blog Design

Blog listing:
- Editorial layout.
- Featured article besar.
- Grid artikel.
- Kategori.
- Search.
- Pagination.

Blog detail:
- Breadcrumb.
- Category label.
- Title.
- Excerpt.
- Author.
- Published date.
- Cover image.
- Rich text content.
- Table of contents bila diperlukan.
- Related articles.
- Share links.

Typography artikel harus mengutamakan keterbacaan.

## 7. Gallery Design

Gallery listing:
- Album cards.
- Cover image.
- Album title.
- Event date.
- Jumlah foto.

Album detail:
- Album title.
- Description.
- Responsive image grid.
- Lightbox.
- Navigation antar foto.

## 8. Admin Dashboard Design

Visual direction:
Clean CMS Dashboard.

Sidebar:
- Dashboard.
- Blog.
- Categories.
- Tags.
- Gallery.
- Media Library.
- Settings.
- Logout.

Dashboard overview:
- Total articles.
- Published articles.
- Draft articles.
- Total gallery albums.
- Total gallery images.

Blog editor:
- Title input.
- Slug input.
- Rich text editor.
- Image insertion.
- Category selector.
- Tag selector.
- SEO settings.
- Draft / Publish controls.

Gallery editor:
- Album title.
- Description.
- Cover.
- Multi-image uploader.
- Image sorting.
- Publish toggle.

Admin dashboard harus terpisah secara visual dari public website, tetapi tetap konsisten menggunakan identitas Saindo.

## 9. Responsive Design

Desktop:
- Full navigation.
- Multi-column layout.
- Editorial composition.

Tablet:
- Reduced column count.
- Flexible grids.
- Smaller typography.

Mobile:
- Hamburger navigation.
- Single-column content.
- Full-width CTA.
- Optimized image ratios.
- Touch-friendly controls.
- Compact admin sidebar.

## 10. Animation

Gunakan animasi seperlunya:

- Subtle fade-in.
- Gentle image reveal.
- Hover transitions.
- Smooth anchor scrolling.
- Minimal page transition.

Hindari:
- Animasi berlebihan.
- Auto-playing carousel yang mengganggu.
- Efek parallax berat.
- Animasi yang menghambat mobile.

---

# PART 5 — FINAL PROJECT RULES

1. Satu project Astro fullstack.
2. Satu Cloudflare Worker deployment.
3. Tidak menggunakan Hono.
4. Tidak membuat backend API service terpisah.
5. Menggunakan Astro Actions untuk operasi mutasi data.
6. Menggunakan server-side queries untuk membaca database.
7. Cloudflare D1 menjadi database utama.
8. ImgBB menjadi image hosting dinamis.
9. Foto identitas utama disimpan dalam project.
10. Single Super Admin.
11. Bahasa Indonesia sebagai default.
12. Bahasa Jepang sebagai bahasa alternatif.
13. Blog menggunakan TipTap JSON.
14. Seluruh schema database menggunakan migrations.
15. Semua konten publik harus berasal dari data valid.
16. Semua fitur admin harus terlindungi autentikasi.
17. Seluruh halaman wajib responsive.
18. Jangan memasukkan data statistik, testimoni, legalitas, atau klaim mitra yang belum terverifikasi.

---

# PROJECT COMPLETION DEFINITION

LPK Saindo Website 2.0 dinyatakan selesai apabila:

- Homepage sesuai design system.
- Public pages lengkap.
- Blog dapat dikelola melalui dashboard.
- Rich text editor bekerja.
- Gallery dapat dikelola melalui dashboard.
- ImgBB terintegrasi.
- Single admin authentication bekerja.
- D1 terhubung.
- Bahasa Indonesia dan Jepang tersedia.
- SEO dasar diterapkan.
- Website berjalan di Cloudflare Workers.
- Tidak ada error kritis dalam pengujian.

**Dokumen ini menjadi acuan utama selama proses development LPK Saindo Website 2.0. Perubahan arsitektur atau fitur harus dicatat sebagai revisi spesifikasi project.**
