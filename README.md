# LPK Saindo 2.0 — Official Website & CMS

[![Astro](https://img.shields.io/badge/Astro-5.18.2-FF5D01.svg?logo=astro&logoColor=white)](https://astro.build/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020.svg?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Cloudflare D1](https://img.shields.io/badge/Cloudflare-D1_Database-F38020.svg?logo=sqlite&logoColor=white)](https://developers.cloudflare.com/d1/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Deployment-Live-success.svg)](https://saindohp.cirilalacture.workers.dev)

Website resmi berstandar korporat Jepang untuk **LPK Saindo** (Lembaga Pelatihan Kerja Resmi ke Jepang berizin SO & Kemnaker RI). Dibangun dengan arsitektur fullstack **Astro 5 SSR** di atas jaringan edge global **Cloudflare Workers** dan database serverless **Cloudflare D1**.

---

## 🌐 Live Website & Tautan Produksi

| Layanan | Tautan Langsung |
|---|---|
| **Beranda Publik (Bahasa Indonesia)** | [https://saindohp.cirilalacture.workers.dev](https://saindohp.cirilalacture.workers.dev) |
| **Beranda Publik (日本語 - Japanese)** | [https://saindohp.cirilalacture.workers.dev/ja](https://saindohp.cirilalacture.workers.dev/ja) |
| **Portal Administrasi CMS** | [https://saindohp.cirilalacture.workers.dev/admin/login](https://saindohp.cirilalacture.workers.dev/admin/login) |
| **Dynamic XML Sitemap** | [https://saindohp.cirilalacture.workers.dev/sitemap.xml](https://saindohp.cirilalacture.workers.dev/sitemap.xml) |
| **Repositori GitHub** | [https://github.com/cirilalacture/Saindo_HP](https://github.com/cirilalacture/Saindo_HP) |

### 🔐 Kredensial Default Super Admin CMS
- **URL Login:** `/admin/login`
- **Email:** `admin@lpksaindo.com`
- **Password:** `SaindoAdmin2026!`

---

## 📌 Dokumentasi Proyek

Dokumentasi rancangan dan spesifikasi teknis lengkap:
- **[PRD.md](file:///home/sjodi442/Projects/Web/saindohp/PRD.md):** *Product Requirements Document* (kebutuhan fungsional 10 section beranda, rute modular dwibahasa, CMS admin, spesifikasi NFR, dan kriteria penerimaan).
- **[IMPLEMENTATION_PLAN.md](file:///home/sjodi442/Projects/Web/saindohp/IMPLEMENTATION_PLAN.md):** Rencana implementasi 8 fase milestone teknis (Phase 1–8 seluruhnya telah selesai).
- **[SCHEMA.md](file:///home/sjodi442/Projects/Web/saindohp/SCHEMA.md):** Desain skema database Cloudflare D1 (11 tabel terelasi), diagram ERD, DDL migration SQL, dan schema Drizzle ORM.
- **[DESIGN.md](file:///home/sjodi442/Projects/Web/saindohp/DESIGN.md):** Spesifikasi Design System *Japanese Corporate Minimalist* (*Shisei* & *Ma*, warna Vermilion `#B91C2C`, Sumi Charcoal `#171717`, tipografi Manrope / Inter / Noto Sans JP).

---

## 🎨 Acuan Desain Stitch

Desain visual antarmuka telah diverifikasi menggunakan **Stitch**:
- **Stitch Project:** `projects/5513990903207659469` (*LPK Saindo - Official Homepage*)
- **Design System Asset:** `assets/c5ca94f2caf448cfae6110a2df4aab70`
- **Visual Preview:** `design_reference/homepage_preview.png`

---

## 🛠️ Tech Stack & Spesifikasi Arsitektur

| Layer | Teknologi | Peran & Deskripsi |
|---|---|---|
| **Framework Fullstack** | [Astro 5.18.2](https://astro.build/) | SSR (Server-Side Rendering) mode dengan performa edge berkecepatan tinggi. |
| **Interactive Islands** | [React 19](https://react.dev/) | Komponen interaktif terisolasi (TipTap Editor, React Lightbox, Mobile Drawer). |
| **Styling & Theme** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utilitas CSS, tema warna Jepang (*Vermilion*, *Charcoal*, *Shoji*). |
| **Database** | [Cloudflare D1](https://developers.cloudflare.com/d1/) | Database SQLite serverless di jaringan Cloudflare dengan replikasi latensi rendah. |
| **ORM & Migrations** | [Drizzle ORM](https://orm.drizzle.team/) | Type-safe database queries dan manajemen migrasi SQL otomatis. |
| **Rich Text Editor** | [TipTap 2](https://tiptap.dev/) | Editor artikel warta dengan penyimpanan struktur data JSON TipTap murni. |
| **Media Bridge** | External URL Registry | Pendaftaran tautan gambar internet (ImgBB direct link, CDN) tanpa beban penyimpanan lokal. |
| **Hosting & Runtime** | [Cloudflare Workers](https://workers.cloudflare.com/) | Deployment single-worker berbasis V8 isolate dengan zero cold start. |

---

## 🗺️ Struktur Rute Halaman

### Halaman Publik Dwibahasa (ID & JA)
- `/` & `/ja` : **Beranda Utama** (Hero, Metrik Kelulusan, Program Unggulan, Alur Belajar, Testimoni Alumni, Galeri Kegiatan, Warta Terbaru, Konsultasi CTA).
- `/about` & `/ja/about` : **Tentang Kami** (Legalitas Izin SO & Kemnaker, Visi, Misi, Profil Sensei Native, Fasilitas Pelatihan).
- `/programs` & `/programs/[slug]` : **Program Pelatihan** (Katalog & Silabus Detail: Kelas Intensif N4/N3, Tokutei Ginou SSW, Magang Teknis).
- `/gallery` & `/gallery/[slug]` : **Galeri Dokumentasi** (Album Kegiatan Pelepasan, Sesi Kaiwa, Simulasi Kerja dengan Lightbox).
- `/blog` & `/blog/[slug]` : **Warta & Informasi** (Daftar Berita, Tips Ujian JFT/JLPT, Info Loker Jepang dengan TipTap Renderer).
- `/contact` & `/ja/contact` : **Hubungi Kami** (Form Konsultasi, Nomor Hotline WhatsApp, Alamat Kantor, Peta Google Maps).
- `/sitemap.xml` : Dynamic XML Sitemap otomatis dari Cloudflare D1.
- `/robots.txt` : Direktif crawler mesin pencari dengan proteksi halaman admin.

### Halaman Portal Administrasi CMS (`/admin`)
- `/admin/login` : Login Super Admin dengan hashing PBKDF2 Web Crypto & sesi cookie `HttpOnly`.
- `/admin/logout` : Invalidate sesi di D1 dan penghapusan cookie.
- `/admin/dashboard` : Statistik konten live, status konektivitas D1, daftar artikel terbaru, dan aksi cepat.
- `/admin/posts` : Tabel manajemen artikel, filter status terbit/draf, tombol toggle publikasi, dan hapus.
- `/admin/posts/new` : Form penulisan warta baru dwibahasa (ID & JA) dengan TipTap Rich Text Editor.
- `/admin/posts/[id]/edit` : Form pengeditan artikel warta lengkap dengan pemuatan data awal dari D1.
- `/admin/gallery` : Pengelolaan album kegiatan, tanggal kegiatan, status publikasi, dan cover album.
- `/admin/gallery/new` & `[id]/edit` : Form pembuatan dan pengeditan album galeri.
- `/admin/gallery/[id]/items` : Pengelolaan foto-foto dalam album beserta caption dwibahasa dan urutan (*sort order*).
- `/admin/media` : Media Library pendaftaran link gambar internet dengan fitur live preview, copy URL, dan proteksi hapus jika sedang digunakan.
- `/admin/settings` : Dashboard konfigurasi kontak (WhatsApp, email, telepon), legalitas (izin SO, nomor VIN), jam kerja, alamat fisik, dan meta SEO fallback.

---

## 📁 Struktur Direktori Proyek

```text
saindohp/
├── .github/                # Konfigurasi repositori GitHub
├── design_reference/       # Pratinjau visual Stitch
├── migrations/             # Berkas migrasi skema SQL D1
│   └── 0001_initial_schema.sql
├── public/                 # Aset statis publik
│   ├── .assetsignore       # Mengabaikan bundle private _worker.js dari asset store
│   ├── apple-touch-icon.png# Icon iOS 180x180
│   ├── favicon.png         # Favicon browser 64x64
│   ├── favicon.svg         # Favicon vektor
│   ├── robots.txt          # Crawler instructions
│   └── assets/
│       ├── icons/          # PWA icons (192px & 512px)
│       └── logo/           # Logo resmi LPK Saindo (2048x2048)
├── scripts/                # Script utilitas CLI
│   ├── create-admin.mjs    # Script pembuat akun super admin baru
│   └── seed.sql            # Script SQL data awal (mock data)
├── src/
│   ├── actions/            # Astro Actions (posts, gallery, media, settings)
│   ├── components/         # Komponen UI & Layout
│   │   ├── blog/           # TipTap JSON Renderer
│   │   ├── gallery/        # React Lightbox island
│   │   ├── home/           # 10 Section modular beranda
│   │   ├── layout/         # Navbar, Footer, MobileMenu
│   │   └── ui/             # Button, Badge, Container, SectionHeader
│   ├── db/                 # Drizzle ORM client, skema, dan helpers query
│   │   ├── client.ts
│   │   ├── schema.ts
│   │   └── queries/
│   ├── layouts/            # Layouts Astro (MainLayout & AdminLayout)
│   ├── lib/                # Autentikasi PBKDF2 & sanitasi
│   ├── pages/              # Routing Astro SSR (publik, /ja/, dan /admin/)
│   ├── styles/             # Stylesheet global Tailwind & tema
│   └── middleware.ts       # Proteksi otentikasi rute /admin/*
├── astro.config.mjs        # Konfigurasi Astro SSR & adapter Cloudflare
├── package.json            # Daftar dependensi & npm scripts
├── tailwind.config.mjs     # Konfigurasi tema Tailwind CSS
├── tsconfig.json           # Konfigurasi TypeScript strict
└── wrangler.jsonc          # Konfigurasi Cloudflare Workers & D1 bindings
```

---

## 🚀 Panduan Menjalankan Secara Lokal

```bash
# 1. Masuk ke folder proyek
cd saindohp

# 2. Instal dependensi
npm install

# 3. Jalankan migrasi database D1 lokal
npm run db:migrate:local

# 4. Generate akun admin default (opsional jika sudah ada di seed)
node scripts/create-admin.mjs

# 5. Isi data dummy awal (artikel, galeri, media, settings)
npx wrangler d1 execute lpksaindo_db --local --file=scripts/seed.sql

# 6. Jalankan development server
npm run dev
```

Buka peramban di:
- Publik: `http://localhost:4321/`
- Admin CMS: `http://localhost:4321/admin/login`

---

## 🌐 Panduan Deployment Cloudflare

### Konfigurasi Database D1 Produksi
Database D1 produksi telah dibuat dan terdaftar pada [`wrangler.jsonc`](file:///home/sjodi442/Projects/Web/saindohp/wrangler.jsonc):
- **Database Name:** `lpksaindo_db`
- **Database ID:** `1d52b68f-95c5-4064-9e25-01559a03cb81`

### 1. Menghubungkan ke Cloudflare Dashboard via Git (Otomatis)
1. Buka **[Cloudflare Dashboard](https://dash.cloudflare.com/)** $\to$ **Compute (Workers & Pages)** $\to$ **Create application**.
2. Pilih **Connect to Git** dan pilih repositori `cirilalacture/Saindo_HP`.
3. Tentukan konfigurasi build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Di tab **Settings** $\to$ **Bindings / D1 Databases**:
   - Pastikan binding D1 database bernama: `DB` mengarah ke `lpksaindo_db`.
5. Setiap kali ada `git push origin main`, Cloudflare akan otomatis mengompilasi dan men-deploy pembaruan.

### 2. Deployment Manual via Wrangler CLI
```bash
# 1. Pastikan sudah login ke Cloudflare
npx wrangler whoami

# 2. Jalankan migrasi database remote (jika ada skema baru)
npm run db:migrate:remote

# 3. Build & deploy Worker
npm run build
npx wrangler deploy
```

---

## 🔒 Fitur Keamanan

1. **PBKDF2 Password Hashing:** 100.000 iterasi SHA-256 menggunakan native Web Crypto API. Password plain text tidak pernah disimpan atau dicatat.
2. **Session Token Cryptography:** Token acak 256-bit di-hash dengan SHA-256 sebelum disimpan di D1. Token mentah hanya dikirimkan ke client via cookie.
3. **Cookie Attributes:** Cookie `saindo_session` menggunakan flag `HttpOnly; SameSite=Strict; Path=/; Max-Age=7 hari` dengan flag `Secure` aktif di lingkungan produksi.
4. **Auth Middleware Server-Side:** Semua rute `/admin/*` diverifikasi ketat di edge network Cloudflare sebelum merender halaman.
5. **Draf Isolation:** Artikel berstatus `draft` dan album galeri yang tidak dipublikasikan (`is_published: 0`) diisolasi secara permanen dari rute publik.
6. **Code Privacy:** Berkas `.assetsignore` memblokir pengunggahan direktori server-side `_worker.js` ke static asset store publik.

---

## 📄 Lisensi & Hak Cipta

© 2026 **LPK Saindo** (Lembaga Pelatihan Kerja Resmi ke Jepang). Seluruh hak cipta dilindungi undang-undang.
