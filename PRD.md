# Product Requirements Document (PRD) — LPK Saindo Website 2.0

**Project Name:** LPK Saindo Website 2.0  
**Product Type:** Official Institutional Website, Education Portal & Headless-Style Integrated CMS  
**Design Direction:** Japanese Corporate Minimalist (和風ミニマリズム)  
**Target Audience:** Calon Peserta Pelatihan, Orang Tua / Wali, Alumni, Rekanan Perusahaan / Asosiasi Jepang (*Kumiai* / *Accepting Organizations*), Admin LPK Saindo  
**Supported Languages:** Bahasa Indonesia (Default, Primary), 日本語 (Japanese, Secondary)  
**Primary Target Platform:** Web (Mobile-First Responsive, Tablet, Desktop)  
**Deployment Infrastructure:** Cloudflare Workers (Astro Fullstack SSR) + Cloudflare D1 + ImgBB  
**Version:** 2.0.0  
**Status:** Approved Specification  

---

## 1. Executive Summary & Project Context

LPK Saindo (Lembaga Pelatihan Kerja Saindo) adalah lembaga pelatihan vokasi dan pendidikan bahasa Jepang resmi yang berfokus mempersiapkan talenta muda Indonesia untuk program magang kerja (*Ginou Jisshuusei*) dan tenaga kerja berketerampilan spesifik (*Tokutei Ginou / SSW*) di Jepang.

Website versi 2.0 ini dirancang untuk:
1. **Membangun Otoritas & Kepercayaan Lembaga:** Menghadirkan citra korporat Jepang yang bersih, presisi, kredibel, dan transparan bagi calon peserta, orang tua, serta mitra lembaga di Jepang.
2. **Katalog Informasi Program Terpadu:** Menyediakan kurikulum, persyaratan, estimasi biaya, alur pendaftaran, dan prospek kerja yang jelas dan terstruktur.
3. **Penerbitan Konten Mandiri (Internal CMS):** Memberikan antarmuka manajemen konten artikel blog (bilingual), galeri dokumentasi kegiatan, dan konfigurasi profil lembaga tanpa ketergantungan pada tim teknis / tanpa edit source code.
4. **Single-Worker Fullstack Architecture:** Mengeliminasi pemisahan API backend eksternal dengan mengintegrasikan Astro SSR, Astro Actions, autentikasi server-side, dan Cloudflare D1 dalam satu runtime serverless yang hemat biaya, berperforma tinggi, dan berlatensi ultra-rendah secara global.

---

## 2. Business Goals & Value Proposition

| ID | Tujuan Bisnis | Target Metrik / Indikator |
|---|---|---|
| **BG-01** | Memperkuat kredibilitas institusi di hadapan calon siswa & orang tua | Penurunan bounce rate, peningkatan durasi sesi di halaman profil & program |
| **BG-02** | Mengakselerasi konversi calon pendaftar via WhatsApp & Formulir | Kemudahan akses CTA WhatsApp langsung di setiap segmen krusial |
| **BG-03** | Membangun kemitraan dengan perusahaan & lembaga pengawas Jepang (*AO/Kumiai*) | Halaman profil dan program berbahasa Jepang yang akurat dan berstandar bisnis Jepang |
| **BG-04** | Menyediakan saluran publikasi berita & dokumentasi pelatihan resmi | Rata-rata 2–4 artikel/dokumentasi terbit setiap bulan melalui Admin CMS |
| **BG-05** | Efisiensi operasional dan zero-server-maintenance | Deployment 100% serverless di Cloudflare Workers tanpa VPS / backend maintenance |

---

## 3. User Personas & User Journeys

### Persona A: Bayu (19 tahun) — Calon Peserta Pelatihan (Lulusan SMK)
- **Kebutuhan:** Ingin tahu syarat ikut program magang/SSW ke Jepang, biaya, durasi pelatihan, dan apakah ada jaminan tes/wawancara.
- **Pain Point:** Bingung dengan banyaknya LPK ilegal atau calo tenaga kerja; butuh kepastian legalitas dan testimoni nyata alumni.
- **Goal:** Menemukan program yang cocok (misal: Tokutei Ginou Pengolahan Makanan), melihat alur pendaftaran, dan langsung menghubungi admin via WhatsApp.

### Persona B: Pak Hendro (48 tahun) — Orang Tua Calon Peserta
- **Kebutuhan:** Memastikan LPK Saindo memiliki izin resmi kemenaker/disnaker, fasilitas asrama yang layak, keamanan, dan rekam jejak kelulusan.
- **Pain Point:** Takut penipuan pemberangkatan kerja ke luar negeri.
- **Goal:** Melihat izin legalitas, foto fasilitas riil, dan profil pimpinan/instruktur lembaga.

### Persona C: Tanaka-san (42 tahun) — Perwakilan Kumiai / Perusahaan Penerima di Jepang
- **Kebutuhan:** Meninjau standar kurikulum bahasa Jepang, kedisiplinan siswa, dan fasilitas pelatihan vokasi.
- **Pain Point:** Kesulitan membaca website lokal berbahasa Indonesia saja; membutuhkan ringkasan profil dalam bahasa Jepang standar.
- **Goal:** Mengakses versi `/ja/`, meninjau program pelatihan, materi etika kerja (*Horenso, 5S*), dan kontak kemitraan.

### Persona D: Admin / Staf Operasional LPK Saindo
- **Kebutuhan:** Mempublikasikan pengumuman seleksi, jadwal kelas baru, artikel edukasi, dan dokumentasi foto pelepasan siswa ke Jepang.
- **Pain Point:** Tidak mengerti koding HTML/CSS, butuh editor yang mudah (WYSIWYG/TipTap) dan upload gambar otomatis.
- **Goal:** Login ke `/admin`, menulis artikel, mengunggah foto kegiatan, dan melihat ringkasan status tayang.

---

## 4. Product Scope & Functional Requirements

### 4.1. Public Website Module

#### FR-PUB-01: Sticky Navigation Bar
- Logo resmi LPK Saindo dengan tautan kembali ke beranda.
- Menu Navigasi Utama: Beranda, Tentang Kami, Program, Galeri, Blog, Kontak.
- Switcher Bahasa: Toggle intuitif `ID` / `日本語` dengan preservasi rute URL.
- CTA Button: Tombol primer 'Daftar Sekarang' mengarah ke pendaftaran atau WhatsApp.
- Status Header: Sticky header dengan latar belakang semi-transparan ber-blur halus saat scrolling.

#### FR-PUB-02: Homepage (Beranda)
Homepage tersusun dari 12 section terstruktur:
1. **Hero Section:** Headline inspiratif *"Masa Depanmu Dimulai dari Sini. Melangkah Bersama Saindo Menuju Jepang"*, subheadline, tombol CTA ganda ('Daftar Sekarang' & 'Pelajari Program'), dan visual autentik siswa pelatihan.
2. **Introduction Section:** Pernyataan misi lembaga *"Mempersiapkan Generasi Siap Kerja di Jepang"*, filosofi pendidikan, dan foto kegiatan.
3. **Trust Indicators (Statistik Kredibilitas):** Grid metrik valid (Alumni diberangkatkan, tingkat kelulusan JLPT/JFT, mitra perusahaan, tahun pengalaman).
4. **Program Unggulan:** 4 pilar program utama:
   - Bahasa Jepang Intensif (N5–N3 & JFT-Basic A2).
   - Pelatihan Keterampilan Kerja Spesifik (SSW / Tokutei Ginou).
   - Bimbingan Wawancara Kerja & Dokumen COE.
   - Pembekalan Budaya, Kedisiplinan & Etika Kerja Jepang (*5S, Aisatsu, Horenso*).
5. **Why Saindo (Keunggulan Lembaga):** Split layout berisi foto fasilitas dan daftar nilai pembeda LPK Saindo.
6. **Learning Journey (Alur Perjalanan Siswa):** Timeline 5 tahapan dari pendaftaran, pelatihan, sertifikasi, seleksi user Jepang, hingga keberangkatan.
7. **Life at Saindo (Galeri Preview):** Grid editorial asimetris dokumentasi kelas, praktik, simulasi wawancara, dan kegiatan budaya.
8. **Alumni Stories (Testimoni Alumni):** Kartu testimoni autentik dilengkapi nama, foto, jenis pekerjaan, dan kota penempatan di Jepang.
9. **Latest Articles (Warta & Informasi Terbaru):** 3 artikel blog terkini dengan thumbnail, kategori, dan tanggal rilis.
10. **Consultation Call to Action (CTA Akhir):** Banner konversi interaktif dengan tombol konsultasi WhatsApp.
11. **Footer:** Navigasi sekunder, alamat kantor operasional, jam kerja, nomor legalitas/izin, kanal sosial media, dan copyright.

#### FR-PUB-03: About Page (`/about`)
- Profil sejarah berdirinya lembaga, visi dan misi.
- Legalitas perizinan SO (Sending Organization) / LPK.
- Struktur instruktur bersertifikasi & native speaker (*Sensei*).
- Galeri fasilitas sarana & prasarana (ruang kelas ber-AC, lab komputer, simulasi kerja, asrama).

#### FR-PUB-04: Programs Page (`/programs` & `/programs/[slug]`)
- Daftar program reguler & akselerasi.
- Detail silabus, target kelulusan (JLPT N4/N3, JFT A2), persyaratan usia/pendidikan, fasilitas yang didapat, dan form/tombol konsultasi program terkait.

#### FR-PUB-05: Gallery Page (`/gallery` & `/gallery/[slug]`)
- Daftar album kegiatan berdasarkan topik/tanggal (contoh: *Pelepasan Angkatan 12 ke Nagoya*, *Simulasi Wawancara Perusahaan Otomotif*).
- Halaman detail album dengan lightbox responsif untuk melihat foto resolusi penuh.

#### FR-PUB-06: Blog Page (`/blog` & `/blog/[slug]`)
- Daftar artikel berita, tips bahasa Jepang, panduan hidup di Jepang, dan info loker magang.
- Filter berdasarkan kategori dan tag.
- Detail artikel dengan TipTap rich content renderer, cover image, perkiraan waktu baca, dan rekomendasi artikel terkait.

#### FR-PUB-07: Contact Page (`/contact`)
- Alamat fisik lengkap kantor dan tempat pelatihan.
- Peta interaktif (Google Maps embed).
- Tautan cepat WhatsApp, email resmi, dan media sosial (Instagram, TikTok, YouTube).

#### FR-PUB-08: Bilingual Routing System (`/` & `/ja/*`)
- Default root `/` untuk Bahasa Indonesia.
- Prefix `/ja/*` untuk halaman berbahasa Jepang (`/ja`, `/ja/about`, `/ja/programs`, `/ja/blog`).
- Aturan ketat: Konten artikel atau album yang belum diterjemahkan ke bahasa Jepang tidak boleh menampilkan teks Indonesia mentah tanpa indikator, melainkan menyediakan fallback bersih atau rujukan ke versi bahasa Indonesia.

---

### 4.2. Admin CMS Module (`/admin`)

#### FR-ADM-01: Single Super Admin Authentication
- Sistem hanya mendukung 1 akun Super Admin terdaftar (dibuat via CLI migration script).
- Password di-hash menggunakan algoritma modern (PBKDF2/Argon2/Web Crypto SHA-256).
- Pengelolaan sesi stateless/stateful berbasis database session token yang di-hash di Cloudflare D1.
- Cookie HTTP-only, Secure, SameSite=Strict dengan masa berlaku (misal: 7 hari).
- Rate limiting sederhana untuk pencegahan brute-force login.

#### FR-ADM-02: Admin Dashboard Overview (`/admin/dashboard`)
- Ringkasan metrik statistik konten: Total Artikel, Artikel Terbit, Draft, Total Album Galeri, Total Foto, Total Media Storage.
- Pintasan cepat pembuatan konten baru.

#### FR-ADM-03: Blog Management (`/admin/blog`)
- CRUD artikel dengan filter status (`draft` / `published`).
- Rich Text Editor TipTap (Heading, Bold, Italic, List, Blockquote, Code, Image Insertion, Link).
- Bidang input terpisah untuk konten Indonesia (`title_id`, `content_id`, `excerpt_id`) dan Jepang (`title_ja`, `content_ja`, `excerpt_ja`).
- Pengaturan slug otomatis/kustom dengan pengecekan keunikan.
- Pemilihan Kategori dan Tag ganda.
- Konfigurasi SEO metadata (Meta Title & Meta Description).

#### FR-ADM-04: Gallery Management (`/admin/gallery`)
- CRUD album galeri (Judul ID/JA, deskripsi, tanggal kegiatan, urutan, status publikasi).
- Multi-photo uploader ke dalam album.
- Drag-and-drop atau input urutan foto (*sort_order*).
- Pemilihan foto cover album.
- Pengaturan caption ID/JA dan alt text untuk aksesibilitas.

#### FR-ADM-05: Media Library & ImgBB Bridge (`/admin/media`)
- Pusat pengelolaan berkas gambar dinamis.
- Integrasi API ImgBB (upload gambar dari browser diarahkan ke backend Astro Action untuk melindungi API Key).
- Penyimpanan metadata berkas di Cloudflare D1 (URL asli, thumbnail, dimensi, mime-type, ukuran, alt text).
- Proteksi penghapusan: gambar yang masih ditautkan ke artikel blog atau cover album tidak dapat dihapus secara sepihak.

#### FR-ADM-06: Website Configuration (`/admin/settings`)
- Form pengaturan dinamis yang tersimpan di tabel `settings`:
  - Identitas lembaga (Nama, Slogan, No Izin Resmi).
  - Kontak (No. WhatsApp Konsultasi, Email, Alamat Lengkap).
  - Tautan Media Sosial (Instagram, Facebook, YouTube, TikTok).
  - Global SEO Defaults (Default OG Image, Site Title, Meta Description).

---

## 5. Non-Functional Requirements (NFR)

| Kategori | Persyaratan Teknis |
|---|---|
| **Performance** | Mobile-First design; skor Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID/INP < 100ms); aset gambar statis lokal terkompresi WebP; lazy loading pada gambar non-hero; zero heavy client-side JavaScript pada halaman beranda publik. |
| **Security** | Zero exposed secrets (ImgBB API key dan session keys via Cloudflare Worker Secrets); cookie HttpOnly + Secure; form CSRF protection via Astro Server Actions; TipTap JSON output sanitization; input validation server-side (Zod schema). |
| **SEO & Crawling** | Semantic HTML5 (header, nav, main, article, section, footer); tag Open Graph & Twitter Card; sitemap.xml otomatis; robots.txt; canonical tag; `hreflang="id"` dan `hreflang="ja"`; Schema.org structured data (`EducationalOrganization`, `Article`, `BreadcrumbList`). |
| **Accessibility** | Kontras warna minimal 4.5:1 untuk body text sesuai WCAG 2.1 AA; semua gambar wajib memiliki alt text; navigasi keyboard-friendly (focus-visible rings); aria-expanded pada tombol menu mobile. |
| **Reliability** | Arsitektur Serverless Cloudflare dengan 99.99% availability; automated D1 database migrations; gracefully handling API external downtime (ImgBB). |

---

## 6. Out of Scope (Release v2.0)

Fitur berikut ditegaskan berada di luar cakupan rilis v2.0 awal:
- Payment gateway online / pembayaran pendaftaran via web.
- Portal dashboard siswa / portal presensi belajar online.
- Sistem portal alumni atau rekrutmen live job-matching internal.
- Multi-role administrator (hanya Super Admin tunggal).
- Fitur kolom komentar publik pada artikel blog.
- Live chat widget pihak ketiga yang membebani performa (dialihkan ke WhatsApp direct CTA).

---

## 7. Success Criteria & Definition of Done

Proyek LPK Saindo Website 2.0 dinyatakan selesai dan siap dipublikasikan apabila:
1. Seluruh 12 section beranda telah diimplementasikan sesuai gaya **Japanese Corporate Minimalist** dan lolos uji responsif (Mobile, Tablet, Desktop).
2. Routing bilingual (`/` dan `/ja/*`) berfungsi tanpa broken links.
3. Alur autentikasi Super Admin aman, session terlindungi, dan tidak dapat dibobol tanpa kredensial valid.
4. Admin dapat membuat, mengedit, mengubah status draft/publish, dan menghapus artikel blog dengan TipTap editor.
5. Admin dapat mengunggah gambar ke galeri melalui integrasi ImgBB dan metadata tersimpan di Cloudflare D1.
6. Seluruh migrasi database D1 berjalan mulus baik di lingkungan lokal maupun Cloudflare Workers production.
7. Build project `npm run build` sukses tanpa error TypeScript atau bundling warning.
