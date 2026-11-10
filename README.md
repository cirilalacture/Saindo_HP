# LPK Saindo 2.0 — Official Website & CMS

Website resmi LPK Saindo (Lembaga Pelatihan Kerja ke Jepang) dengan arsitektur fullstack Astro di atas Cloudflare Workers, Cloudflare D1, dan ImgBB.

## 📌 Dokumentasi Proyek

Dokumentasi lengkap proyek tersedia pada berkas-berkas berikut:
- **[PRD.md](file:///home/sjodi442/Projects/Web/saindohp/PRD.md):** Product Requirements Document (Tujuan bisnis, user persona, kebutuhan fungsional 12 section beranda & CMS, NFR, kriteria selesai).
- **[IMPLEMENTATION_PLAN.md](file:///home/sjodi442/Projects/Web/saindohp/IMPLEMENTATION_PLAN.md):** Rencana implementasi 8 fase milestone teknis, mitigasi risiko, dan acceptance criteria.
- **[SCHEMA.md](file:///home/sjodi442/Projects/Web/saindohp/SCHEMA.md):** Desain skema database Cloudflare D1, diagram relasi ERD, DDL migration SQL, dan schema Drizzle ORM.
- **[DESIGN.md](file:///home/sjodi442/Projects/Web/saindohp/DESIGN.md):** Spesifikasi Design System Japanese Corporate Minimalist, tokens warna, tipografi Manrope/Inter/Noto Sans JP, komponen, dan acuan visual Stitch.

## 🎨 Acuan Desain Stitch

Desain visual halaman utama telah digenerate dan divalidasi menggunakan **Stitch**:
- **Stitch Project:** `projects/5513990903207659469` (*LPK Saindo - Official Homepage*)
- **Design System Asset:** `assets/c5ca94f2caf448cfae6110a2df4aab70`
- **Visual Preview:** `design_reference/homepage_preview.png`

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Fullstack Framework | [Astro 5](https://astro.build/) (Server Output SSR) |
| Interactive UI Islands | [React 19](https://react.dev/) |
| Styling & Tokens | [Tailwind CSS](https://tailwindcss.com/) |
| Database | [Cloudflare D1](https://developers.cloudflare.com/d1/) (Edge SQLite) |
| ORM & Migrations | [Drizzle ORM](https://orm.drizzle.team/) & Drizzle Kit |
| Rich Text Editor | [TipTap](https://tiptap.dev/) |
| Dynamic Media Storage | [ImgBB](https://imgbb.com/) |
| Hosting & Edge Runtime | [Cloudflare Workers](https://workers.cloudflare.com/) |

## 🚀 Perintah Dasar

```bash
# Menjalankan development server lokal
npm run dev

# Memeriksa tipe dan build
npm run build

# Menjalankan migrasi database D1 lokal
npm run db:migrate:local

# Membuat user super admin pertama
npm run admin:create
```
