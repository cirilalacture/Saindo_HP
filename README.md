# LPK Saindo 2.0 — Official Website & CMS

Website resmi LPK Saindo (Lembaga Pelatihan Kerja Resmi ke Jepang) berarsitektur fullstack Astro 5 SSR di atas Cloudflare Workers dan Cloudflare D1.

## 📌 Dokumentasi Proyek

Dokumentasi lengkap proyek:
- **[PRD.md](file:///home/sjodi442/Projects/Web/saindohp/PRD.md):** Product Requirements Document (Kebutuhan fungsional 10 section beranda, rute modular dwibahasa, CMS admin, NFR, dan acceptance criteria).
- **[IMPLEMENTATION_PLAN.md](file:///home/sjodi442/Projects/Web/saindohp/IMPLEMENTATION_PLAN.md):** Rencana implementasi 8 fase milestone teknis (Phase 1–8 seluruhnya telah selesai).
- **[SCHEMA.md](file:///home/sjodi442/Projects/Web/saindohp/SCHEMA.md):** Desain skema database Cloudflare D1 (11 tabel), diagram ERD, DDL migration SQL, dan schema Drizzle ORM.
- **[DESIGN.md](file:///home/sjodi442/Projects/Web/saindohp/DESIGN.md):** Spesifikasi Design System Japanese Corporate Minimalist (*Shisei* & *Ma*, warna Vermilion `#B91C2C`, Sumi Charcoal `#171717`, tipografi Manrope/Inter/Noto Sans JP).

---

## 🎨 Acuan Desain Stitch

Desain visual antarmuka telah diverifikasi menggunakan **Stitch**:
- **Stitch Project:** `projects/5513990903207659469` (*LPK Saindo - Official Homepage*)
- **Design System Asset:** `assets/c5ca94f2caf448cfae6110a2df4aab70`
- **Visual Preview:** `design_reference/homepage_preview.png`

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Fullstack Framework | [Astro 5](https://astro.build/) (Server Output SSR) |
| Interactive UI Islands | [React 19](https://react.dev/) |
| Styling & Tokens | [Tailwind CSS](https://tailwindcss.com/) |
| Database | [Cloudflare D1](https://developers.cloudflare.com/d1/) (Edge SQLite) |
| ORM & Migrations | [Drizzle ORM](https://orm.drizzle.team/) & Drizzle Kit |
| Rich Text Editor | [TipTap 2](https://tiptap.dev/) |
| Media Storage Bridge | External Link Registry (ImgBB direct link, Unsplash, CDN) |
| Hosting & Edge Runtime | [Cloudflare Workers](https://workers.cloudflare.com/) |

---

## 🗺️ Struktur Rute Halaman

### Halaman Publik Dwibahasa (ID & JA)
- `/` & `/ja` : Halaman Beranda (10 modular sections)
- `/about` & `/ja/about` : Profil Lembaga, Legalitas Izin SO, Sensei, Fasilitas
- `/programs` & `/programs/[slug]` : Katalog & Silabus Program (Bahasa Intensif, SSW, Magang)
- `/gallery` & `/gallery/[slug]` : Dokumentasi Foto Kegiatan dengan React Lightbox
- `/blog` & `/blog/[slug]` : Warta, Berita, & Tips Belajar dengan TipTap JSON Renderer
- `/contact` & `/ja/contact` : Kontak Resmi, Hotline WhatsApp, Google Maps Embed
- `/sitemap.xml` : Dynamic XML Sitemap otomatis dari D1
- `/robots.txt` : Petunjuk crawler mesin pencari

### Halaman Portal Administrasi CMS (`/admin`)
- `/admin/login` : Autentikasi Super Admin (PBKDF2 Web Crypto + Session Cookie Strict)
- `/admin/logout` : Invalidate sesi di D1 dan pembersihan cookie
- `/admin/dashboard` : Metrik statistik konten live, status koneksi D1, dan aksi cepat
- `/admin/posts` : Manajemen warta, filter status draf/terbit, preview publik
- `/admin/posts/new` : Form penulisan warta baru dwibahasa dengan TipTap Rich Text Editor
- `/admin/posts/[id]/edit` : Form pembaruan artikel warta
- `/admin/gallery` : Manajemen album kegiatan dan hitungan foto
- `/admin/gallery/new` : Form pembuatan album baru
- `/admin/gallery/[id]/edit` : Form pengeditan metadata album
- `/admin/gallery/[id]/items` : Pengelolaan foto-foto dalam album
- `/admin/media` : Media Library pendaftaran link gambar internet & proteksi hapus
- `/admin/settings` : Pengaturan nomor WA, email, alamat, izin SO, nomor VIN, dan SEO

---

## 🚀 Panduan Menjalankan Secara Lokal

```bash
# 1. Masuk ke folder proyek
cd saindohp

# 2. Instal dependensi
npm install

# 3. Jalankan migrasi database D1 lokal
npm run db:migrate:local

# 4. Generate akun admin default (admin@lpksaindo.com / SaindoAdmin2026!)
node scripts/create-admin.mjs

# 5. Seed data dummy (warta, kategori, media, album)
npx wrangler d1 execute lpksaindo_db --local --file=scripts/seed.sql

# 6. Jalankan development server
npm run dev
```

---

## 🌐 Panduan Deployment Otomatis via GitHub Actions (CI/CD)

Proyek ini telah dikonfigurasi dengan alur **Continuous Deployment (CI/CD)** otomatis di berkas [`.github/workflows/deploy.yml`](file:///home/sjodi442/Projects/Web/saindohp/.github/workflows/deploy.yml). Setiap kali Anda melakukan `git push` ke branch `main`, GitHub Actions akan secara otomatis:
1. Menjalankan typecheck & build (`npm run build`).
2. Menerapkan migrasi database D1 terbaru (`d1 migrations apply lpksaindo_db --remote`).
3. Men-deploy aplikasi Worker terbaru ke Cloudflare.

### 1. Persiapan Secrets di Repositori GitHub
Masuk ke repositori GitHub Anda: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**, tambahkan:

| Secret Name | Deskripsi | Sumber Nilai |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Token API Cloudflare dengan akses Workers & D1 | Buat di *Cloudflare Dashboard* → *My Profile* → *API Tokens* → *Create Token* (gunakan template *Edit Cloudflare Workers* + tambahkan izin *D1:Edit*) |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID Cloudflare Anda | Temukan di sidebar dashboard Cloudflare atau jalankan `npx wrangler whoami` |
| `CLOUDFLARE_D1_DATABASE_ID` | *(Opsional)* UUID Database D1 Produksi | Dari hasil perintah `npx wrangler d1 create lpksaindo_db` (jika tidak ingin ditulis langsung di `wrangler.jsonc`) |

### 2. Hubungkan Repositori Lokal & Push ke GitHub

```bash
# 1. Tambahkan remote GitHub Anda (ganti URL dengan repositori Anda)
git remote add origin https://github.com/<username-anda>/<nama-repo>.git

# 2. Pastikan branch bernama main
git branch -M main

# 3. Push ke GitHub (otomatis memicu deployment ke Cloudflare)
git push -u origin main
```

---

## 🌐 Panduan Deployment Manual (CLI)

Jika ingin melakukan deployment langsung dari terminal komputer:

```bash
# 1. Login ke akun Cloudflare
npx wrangler login

# 2. Buat database D1 production (bila belum ada)
npx wrangler d1 create lpksaindo_db

# 3. Masukkan database_id hasil pembuatan di atas ke file wrangler.jsonc

# 4. Terapkan migrasi skema ke D1 remote production
npm run db:migrate:remote

# 5. Buat akun super admin pertama di database remote
node scripts/create-admin.mjs
# (Salin perintah SQL INSERT yang dihasilkan dan jalankan dengan npx wrangler d1 execute lpksaindo_db --remote --command="...")

# 6. Deploy ke Cloudflare Workers
npx wrangler deploy
```
