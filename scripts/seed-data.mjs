import { randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// Helper to create TipTap JSON string
function makeTipTapDoc(paragraphs) {
  const content = paragraphs.map((p) => {
    if (typeof p === 'string') {
      return {
        type: 'paragraph',
        content: [{ type: 'text', text: p }],
      };
    }
    if (p.heading) {
      return {
        type: 'heading',
        attrs: { level: p.level || 2 },
        content: [{ type: 'text', text: p.heading }],
      };
    }
    if (p.blockquote) {
      return {
        type: 'blockquote',
        content: [{ type: 'paragraph', content: [{ type: 'text', text: p.blockquote }] }],
      };
    }
    return {
      type: 'paragraph',
      content: [{ type: 'text', text: String(p) }],
    };
  });

  return JSON.stringify({ type: 'doc', content });
}

function generateSeedSql() {
  const adminId = 'a2cbebbe-723a-4b08-8700-c28e7d1b8597'; // Super Admin from Phase 1
  const now = new Date().toISOString();

  // Media
  const mediaList = [
    {
      id: 'med-01',
      filename: 'kaiwa-native.webp',
      original_url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 245000,
      width: 1200,
      height: 800,
      alt_text: 'Sesi latihan percakapan kaiwa bersama sensei native speaker',
    },
    {
      id: 'med-02',
      filename: 'jft-study.webp',
      original_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 310000,
      width: 1200,
      height: 800,
      alt_text: 'Buku pelajaran dan persiapan ujian JFT-Basic A2',
    },
    {
      id: 'med-03',
      filename: 'kaigo-tokyo.webp',
      original_url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 285000,
      width: 1200,
      height: 800,
      alt_text: 'Pemandangan kota Tokyo modern tempat penempatan kerja',
    },
    {
      id: 'med-04',
      filename: 'horenso-work.webp',
      original_url: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 340000,
      width: 1200,
      height: 800,
      alt_text: 'Simulasi komunikasi kerja dan etika Horenso',
    },
    {
      id: 'med-05',
      filename: 'pelepasan-angkatan-14.webp',
      original_url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 390000,
      width: 1200,
      height: 800,
      alt_text: 'Upacara pelepasan siswa Saindo angkatan 14 menuju Jepang',
    },
    {
      id: 'med-06',
      filename: 'kelas-tryout.webp',
      original_url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 290000,
      width: 1200,
      height: 800,
      alt_text: 'Suasana kelas try-out ujian bahasa Jepang di LPK Saindo',
    },
    {
      id: 'med-07',
      filename: 'food-processing.webp',
      original_url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 360000,
      width: 1200,
      height: 800,
      alt_text: 'Pelatihan kebersihan dan standar higienis pengolahan makanan Jepang',
    },
    {
      id: 'med-08',
      filename: 'airport-departure.webp',
      original_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
      display_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
      thumbnail_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80',
      mime_type: 'image/webp',
      file_size: 420000,
      width: 1200,
      height: 800,
      alt_text: 'Keberangkatan siswa di bandara internasional menuju Tokyo',
    },
  ];

  // Categories
  const categories = [
    {
      id: 'cat-01',
      name_id: 'Tips Belajar & Ujian',
      name_ja: '学習・試験対策',
      slug: 'tips-belajar',
      description: 'Panduan tata bahasa, kanji, dan strategi lolos ujian JLPT & JFT-Basic.',
    },
    {
      id: 'cat-02',
      name_id: 'Info Loker & Karier',
      name_ja: '求人・採用情報',
      slug: 'info-loker',
      description: 'Informasi lowongan magang industri dan program Tokutei Ginou terbaru di Jepang.',
    },
    {
      id: 'cat-03',
      name_id: 'Budaya & Etika Kerja',
      name_ja: 'ビジネスマナー',
      slug: 'budaya-kerja',
      description: 'Tata krama profesional, prinsip 5S, Horenso, dan adaptasi kehidupan di Jepang.',
    },
    {
      id: 'cat-04',
      name_id: 'Kegiatan & Prestasi',
      name_ja: '研修生の活動',
      slug: 'kegiatan-siswa',
      description: 'Dokumentasi seleksi wawancara user, ujian kelulusan, dan upacara pelepasan siswa.',
    },
  ];

  // Tags
  const tags = [
    { id: 'tag-01', name: 'JLPT', slug: 'jlpt' },
    { id: 'tag-02', name: 'JFT-Basic', slug: 'jft-basic' },
    { id: 'tag-03', name: 'Tokutei Ginou', slug: 'tokutei-ginou' },
    { id: 'tag-04', name: 'Kaigo', slug: 'kaigo' },
    { id: 'tag-05', name: '5S & Horenso', slug: '5s-horenso' },
  ];

  // Posts
  const posts = [
    {
      id: 'post-01',
      author_id: adminId,
      title_id: 'Panduan Lengkap Lolos JFT-Basic A2 Dalam 3 Bulan Persiapan Intensif',
      title_ja: '3ヶ月で合格するJFT-Basic A2攻略法：聴解と文字語彙の重点対策',
      slug: 'panduan-jft-basic-a2',
      excerpt_id: 'Strategi menguasai soal listening dan vocabulary kanji paling sering muncul pada ujian bahasa Jepang JFT-Basic A2 untuk program Tokutei Ginou.',
      excerpt_ja: '出題傾向を徹底分析し、短期間でスコアを伸ばすための効率的な反復学習メソッドと模擬試験の活用法を解説。',
      content_id: makeTipTapDoc([
        'Ujian Japan Foundation Test for Basic Japanese (JFT-Basic) A2 merupakan salah satu syarat mutlak bagi calon peserta yang ingin mengajukan visa Tokutei Ginou (Specified Skilled Worker) di Jepang.',
        { heading: '1. Pahami Struktur 4 Bagian Ujian', level: 2 },
        'Ujian JFT-Basic berbasis komputer (CBT) berdurasi 60 menit dengan total sekitar 50–60 soal, terbagi menjadi: Huruf & Kosakata, Percakapan & Ungkapan, Mendengarkan (Listening), serta Membaca (Reading).',
        { blockquote: 'Fokus utama JFT-Basic bukan menguji hafalan tata bahasa rumit, melainkan kemampuan berkomunikasi praktis dalam situasi kehidupan sehari-hari di Jepang.' },
        { heading: '2. Kuasai Kosakata Kerja & Kehidupan Harian', level: 2 },
        'Di LPK Saindo, siswa dilatih menggunakan buku standar Irodori: Japanese for Life in Japan. Kosakata yang dipelajari langsung berorientasi pada interaksi riil di tempat kerja, supermarket, stasiun kereta, dan kantor pemerintahan Jepang.',
        { heading: '3. Latihan Try-Out Komputer Setiap Akhir Pekan', level: 2 },
        'Kunci keberhasilan 98% siswa Saindo adalah pembiasaan simulasi komputer mingguan. Ini menghilangkan rasa gugup terhadap batas waktu hitung mundur layar ujian.',
      ]),
      content_ja: makeTipTapDoc([
        '国際交流基金日本語基礎テスト（JFT-Basic）A2は、特定技能1号の在留資格取得において必須の日本語試験です。',
        { heading: '1. 4つのセクション構成の理解', level: 2 },
        '試験はCBT方式で実施され、文字・語彙、会話・表現、聴解、読解の4分野から構成されます。日常会話での実践的な運用能力が重視されます。',
        { blockquote: '単なる暗記ではなく、日本の職場や生活現場で即座に使えるコミュニケーション力が合否を分けます。' },
      ]),
      cover_media_id: 'med-02',
      status: 'published',
      seo_title_id: 'Panduan Lolos JFT-Basic A2 Dalam 3 Bulan — LPK Saindo',
      seo_title_ja: 'JFT-Basic A2対策ガイド — LPK Saindo',
      meta_description_id: 'Tips dan strategi intensif lulus ujian JFT-Basic A2 untuk syarat visa Tokutei Ginou ke Jepang.',
      meta_description_ja: '特定技能ビザ取得のためのJFT-Basic A2合格ノウハウと学習カリキュラム。',
      published_at: '2026-11-10T08:00:00.000Z',
      cat_id: 'cat-01',
      tag_ids: ['tag-02', 'tag-03'],
    },
    {
      id: 'post-02',
      author_id: adminId,
      title_id: 'Peluang Kerja Tokutei Ginou Kaigo di Tokyo: Fasilitas & Standar Gaji 2026',
      title_ja: '特定技能 介護分野（東京都）：2026年度募集要項および福利厚生',
      slug: 'tokutei-ginou-kaigo-tokyo',
      excerpt_id: 'Ulasan mendalam mengenai benefit, fasilitas asrama, dan jenjang karier tenaga perawat lansia profesional (Kaigo) di Tokyo dan sekitarnya.',
      excerpt_ja: '都内特別養護老人ホームでの就労条件、宿舎手当、資格取得支援制度についての最新情報。',
      content_id: makeTipTapDoc([
        'Sektor Kaigo (perawat lansia) di Jepang terus membuka kesempatan emas bagi tenaga kerja terampil asal Indonesia dengan standar remunerasi yang setara dengan pekerja lokal Jepang.',
        { heading: 'Standar Penghasilan & Benefit di Tokyo', level: 2 },
        'Gaji pokok tenaga Kaigo Tokutei Ginou di Tokyo pada tahun 2026 berkisar antara ¥210.000 hingga ¥250.000 per bulan (setara Rp 22–27 juta), belum termasuk tunjangan shift malam, lembur, dan bonus tahunan.',
        { blockquote: 'Selain penghasilan yang kompetitif, banyak institusi mitra Saindo menyediakan asrama bersubsidi penuh dan bimbingan sertifikasi Kaigofukushishi nasional.' },
        { heading: 'Persiapan di LPK Saindo', level: 2 },
        'Siswa program Kaigo dibekali pelatihan etika mendampingi lansia, kosakata istilah medis Jepang, dan simulasi mengangkat pasien secara ergonomis.',
      ]),
      content_ja: makeTipTapDoc([
        '日本の介護現場における特定技能外国人の受入れは年々拡大しており、インドネシア人材の丁寧で温かいケアが高く評価されています。',
        { heading: '東京都内での待遇と福利厚生', level: 2 },
        '基本給は月額21万円〜25万円前後で、夜勤手当・資格手当・賞与が別途支給されます。宿舎補助や介護福祉士資格取得支援も充実しています。',
      ]),
      cover_media_id: 'med-03',
      status: 'published',
      seo_title_id: 'Gaji & Peluang Kerja Tokutei Ginou Kaigo di Tokyo — LPK Saindo',
      seo_title_ja: '特定技能 介護職（東京都）求人情報 — LPK Saindo',
      meta_description_id: 'Informasi lengkap gaji, fasilitas, dan syarat kerja Tokutei Ginou Kaigo di Tokyo Jepang.',
      meta_description_ja: '東京都内の介護施設における特定技能1号の最新待遇と研修受入実績。',
      published_at: '2026-11-05T08:00:00.000Z',
      cat_id: 'cat-02',
      tag_ids: ['tag-03', 'tag-04'],
    },
    {
      id: 'post-03',
      author_id: adminId,
      title_id: 'Mengenal Prinsip Horenso: Kunci Keberhasilan Bekerja di Perusahaan Jepang',
      title_ja: '日本の職場で必須となる「報連相（ほうれんそう）」の真髄と実践法',
      slug: 'prinsip-horenso-jepang',
      excerpt_id: 'Mengapa konsep Houkoku (lapor), Renraku (komunikasi), dan Soudan (konsultasi) sangat krusial bagi pekerja asing agar disegani atasan di Jepang.',
      excerpt_ja: '報告・連絡・相談がなぜ日本企業で重要視されるのか、実例を交えてわかりやすくレクチャー。',
      content_id: makeTipTapDoc([
        'Bekerja di Jepang bukan hanya soal mahir berbicara bahasa Jepang, melainkan bagaimana Anda berintegrasi dengan budaya kerja tim yang sangat menghargai alur informasi teratur.',
        { heading: 'Apa itu Horenso?', level: 2 },
        'Horenso adalah singkatan dari tiga kata penting:',
        '1. Houkoku (報告 - Laporan): Selalu laporkan progres pekerjaan sebelum ditanya oleh atasan, terutama bila ada kendala atau perubahan jadwal.',
        '2. Renraku (連絡 - Komunikasi/Pemberitahuan): Sampaikan informasi relevan kepada seluruh anggota tim tanpa menambah opini subjektif.',
        '3. Soudan (相談 - Konsultasi): Mintalah saran kepada senior atau atasan sebelum mengambil keputusan sendiri jika Anda merasa ragu.',
        { blockquote: 'Di LPK Saindo, budaya Horenso dipraktikkan langsung dalam rutinitas harian asrama dari bangun pagi hingga laporan piket malam.' },
      ]),
      content_ja: makeTipTapDoc([
        '「報連相」は日本のビジネスカルチャーの根幹をなすコミュニケーション原則です。',
        { heading: '報連相がもたらす信頼関係', level: 2 },
        '迅速な報告、正確な連絡、そして的確な相談を行うことで、ミスを未然に防ぎ、上司や同僚との強固な信頼関係を築くことができます。',
      ]),
      cover_media_id: 'med-04',
      status: 'published',
      seo_title_id: 'Prinsip Budaya Horenso di Perusahaan Jepang — LPK Saindo',
      seo_title_ja: '日本のビジネスマナー「報連相」の基本 — LPK Saindo',
      meta_description_id: 'Panduan prinsip kerja Horenso di perusahaan Jepang bagi magang dan tenaga kerja SSW.',
      meta_description_ja: '外国人材が日本企業で信頼されるための報連相の実践ポイント。',
      published_at: '2026-10-28T08:00:00.000Z',
      cat_id: 'cat-03',
      tag_ids: ['tag-05'],
    },
    {
      id: 'post-04',
      author_id: adminId,
      title_id: 'Pelepasan 25 Siswa LPK Saindo Angkatan 14 Menuju Osaka dan Nagoya',
      title_ja: '第14期生25名 大阪・名古屋受入企業への壮行式を挙行',
      slug: 'pelepasan-siswa-angkatan-14',
      excerpt_id: 'Suasana haru dan bangga saat 25 talenta muda LPK Saindo resmi diberangkatkan untuk memulai karier di industri manufaktur dan pengolahan makanan.',
      excerpt_ja: '4ヶ月にわたる全寮制研修を修了した優秀な第14期生が、日本への旅立ちを迎えました。',
      content_id: makeTipTapDoc([
        'Sebanyak 25 peserta pelatihan LPK Saindo Angkatan 14 resmi dilepas dalam upacara khidmat di aula pusat pelatihan sebelum bertolak ke Bandara Internasional Soekarno-Hatta menuju Osaka dan Nagoya.',
        { heading: 'Hasil Evaluasi Pelatihan', level: 2 },
        'Seluruh peserta telah menuntaskan kurikulum intensif 4 bulan di asrama, lulus ujian bahasa Jepang tingkat N4/JFT-Basic, dan mengantongi sertifikat kompetensi kejuruan.',
        { blockquote: 'Direktur LPK Saindo berpesan agar siswa senantiasa menjaga nama baik bangsa Indonesia, menjaga shisei (sikap disiplin), dan giat menabung demi masa depan keluarga.' },
      ]),
      content_ja: makeTipTapDoc([
        '大阪および名古屋の受入企業様へ派遣される第14期生25名の壮行式が、厳粛な雰囲気の中で執り行われました。',
        { heading: '万全の準備で日本へ', level: 2 },
        '実習生全員が健康診断をクリアし、生活マナーと防災訓練も修了。今後の日本での活躍が期待されます。',
      ]),
      cover_media_id: 'med-05',
      status: 'published',
      seo_title_id: 'Upacara Pelepasan Siswa Saindo Angkatan 14 — LPK Saindo',
      seo_title_ja: '第14期生壮行式 — LPK Saindo',
      meta_description_id: 'Pelepasan resmi 25 siswa LPK Saindo menuju penempatan kerja di Osaka dan Nagoya Jepang.',
      meta_description_ja: 'LPK Saindo第14期生の渡航壮行式と日本企業への配属報告。',
      published_at: '2026-10-15T08:00:00.000Z',
      cat_id: 'cat-04',
      tag_ids: ['tag-01', 'tag-03'],
    },
  ];

  // Gallery Albums
  const albums = [
    {
      id: 'alb-01',
      title_id: 'Upacara Pelepasan Siswa Angkatan 14 ke Osaka & Nagoya',
      title_ja: '第14期生 日本渡航壮行会（大阪・名古屋）',
      slug: 'pelepasan-angkatan-14',
      description_id: 'Dokumentasi momen pelepasan resmi 25 siswa LPK Saindo setelah menyelesaikan pelatihan bahasa dan kedisiplinan 4 bulan.',
      description_ja: '4ヶ月間の集中教育を修了した25名の研修生の日本渡航壮行式および空港出発風景。',
      cover_media_id: 'med-05',
      is_published: 1,
      sort_order: 1,
      event_date: '2026-10-15',
      items: [
        { media_id: 'med-05', caption_id: 'Foto bersama upacara pelepasan siswa di aula utama', caption_ja: '壮行式後の集合写真' },
        { media_id: 'med-08', caption_id: 'Momen perpisahan dengan keluarga di bandara internasional', caption_ja: '空港での出発見送り' },
        { media_id: 'med-06', caption_id: 'Penyerahan paspor dan tiket penerbangan oleh pimpinan lembaga', caption_ja: '渡航書類の授与' },
      ],
    },
    {
      id: 'alb-02',
      title_id: 'Sesi Kaiwa & Percakapan Budaya Bersama Sensei Native',
      title_ja: '日本人講師による実践日本語会話（Kaiwa）授業',
      slug: 'praktik-kaiwa-native',
      description_id: 'Aktivitas belajar percakapan interaktif siswa LPK Saindo bersama instruktur native speaker dari Jepang.',
      description_ja: '日常会話から職場での指示受け、現場報告までを想定したロールプレイング授業。',
      cover_media_id: 'med-01',
      is_published: 1,
      sort_order: 2,
      event_date: '2026-10-25',
      items: [
        { media_id: 'med-01', caption_id: 'Latihan percakapan dua arah situasi di tempat kerja', caption_ja: 'ペアワークによる会話練習' },
        { media_id: 'med-02', caption_id: 'Evaluasi kosakata dan kanji harian', caption_ja: '文字・語彙小テスト' },
        { media_id: 'med-06', caption_id: 'Simulasi ujian pendengaran (Choukai)', caption_ja: '聴解模擬テスト' },
      ],
    },
    {
      id: 'alb-03',
      title_id: 'Simulasi Kerja Pengolahan Makanan & Kaigo Caregiver',
      title_ja: '特定技能実技訓練（食品製造・介護職）',
      slug: 'simulasi-kerja-ssw',
      description_id: 'Praktik penggunaan peralatan kerja, standar sanitasi 5S, dan penanganan pasien lansia sesuai standar Jepang.',
      description_ja: '衛生管理基準の徹底と介護技術の実技演習風景。',
      cover_media_id: 'med-07',
      is_published: 1,
      sort_order: 3,
      event_date: '2026-11-02',
      items: [
        { media_id: 'med-07', caption_id: 'Praktik standar higienitas dapur dan pengemasan makanan', caption_ja: '食品衛生とクリーンルーム実習' },
        { media_id: 'med-04', caption_id: 'Simulasi etika Horenso dalam tim kerja', caption_ja: 'チーム内での報連相訓練' },
      ],
    },
  ];

  // Generate SQL statements
  let sql = '-- Seed Data for LPK Saindo Development\nPRAGMA foreign_keys = OFF;\n\n';

  // Insert media
  for (const m of mediaList) {
    sql += `INSERT OR REPLACE INTO media (id, provider, original_url, display_url, thumbnail_url, filename, mime_type, file_size, width, height, alt_text, created_at)
VALUES ('${m.id}', 'local', '${m.original_url}', '${m.display_url}', '${m.thumbnail_url}', '${m.filename}', '${m.mime_type}', ${m.file_size}, ${m.width}, ${m.height}, '${m.alt_text.replace(/'/g, "''")}', '${now}');\n`;
  }

  // Insert categories
  for (const c of categories) {
    sql += `INSERT OR REPLACE INTO categories (id, name_id, name_ja, slug, description, created_at)
VALUES ('${c.id}', '${c.name_id}', '${c.name_ja}', '${c.slug}', '${c.description.replace(/'/g, "''")}', '${now}');\n`;
  }

  // Insert tags
  for (const t of tags) {
    sql += `INSERT OR REPLACE INTO tags (id, name, slug)
VALUES ('${t.id}', '${t.name}', '${t.slug}');\n`;
  }

  // Insert posts & mappings
  for (const p of posts) {
    const escapedContentId = p.content_id.replace(/'/g, "''");
    const escapedContentJa = p.content_ja.replace(/'/g, "''");
    sql += `INSERT OR REPLACE INTO posts (id, author_id, title_id, title_ja, slug, excerpt_id, excerpt_ja, content_id, content_ja, cover_media_id, status, seo_title_id, seo_title_ja, meta_description_id, meta_description_ja, view_count, published_at, created_at, updated_at)
VALUES ('${p.id}', '${p.author_id}', '${p.title_id.replace(/'/g, "''")}', '${p.title_ja.replace(/'/g, "''")}', '${p.slug}', '${p.excerpt_id.replace(/'/g, "''")}', '${p.excerpt_ja.replace(/'/g, "''")}', '${escapedContentId}', '${escapedContentJa}', '${p.cover_media_id}', '${p.status}', '${p.seo_title_id}', '${p.seo_title_ja}', '${p.meta_description_id}', '${p.meta_description_ja}', 128, '${p.published_at}', '${now}', '${now}');\n`;

    sql += `INSERT OR REPLACE INTO post_categories (post_id, category_id) VALUES ('${p.id}', '${p.cat_id}');\n`;
    for (const tid of p.tag_ids) {
      sql += `INSERT OR REPLACE INTO post_tags (post_id, tag_id) VALUES ('${p.id}', '${tid}');\n`;
    }
  }

  // Insert albums & items
  for (const a of albums) {
    sql += `INSERT OR REPLACE INTO gallery_albums (id, title_id, title_ja, slug, description_id, description_ja, cover_media_id, is_published, sort_order, event_date, created_at, updated_at)
VALUES ('${a.id}', '${a.title_id.replace(/'/g, "''")}', '${a.title_ja.replace(/'/g, "''")}', '${a.slug}', '${a.description_id.replace(/'/g, "''")}', '${a.description_ja.replace(/'/g, "''")}', '${a.cover_media_id}', ${a.is_published}, ${a.sort_order}, '${a.event_date}', '${now}', '${now}');\n`;

    let itemOrder = 1;
    for (const itm of a.items) {
      const itmId = `${a.id}-item-${itemOrder}`;
      sql += `INSERT OR REPLACE INTO gallery_items (id, album_id, media_id, caption_id, caption_ja, sort_order, created_at)
VALUES ('${itmId}', '${a.id}', '${itm.media_id}', '${itm.caption_id.replace(/'/g, "''")}', '${itm.caption_ja.replace(/'/g, "''")}', ${itemOrder}, '${now}');\n`;
      itemOrder++;
    }
  }

  sql += 'PRAGMA foreign_keys = ON;\n';
  return sql;
}

const sql = generateSeedSql();
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'seed.sql'), sql, 'utf8');
console.log('Generated scripts/seed.sql successfully!');
