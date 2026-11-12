export interface ProgramDetail {
  slug: string;
  badge: 'n4' | 'ssw' | 'magang' | 'neutral';
  badgeLabel: string;
  badgeLabelJa: string;
  title: string;
  titleJa: string;
  tagline: string;
  taglineJa: string;
  description: string;
  descriptionJa: string;
  heroImage: string;
  duration: string;
  durationJa: string;
  target: string;
  targetJa: string;
  schedule: string;
  scheduleJa: string;
  pricing?: string;
  pricingJa?: string;
  syllabus: { title: string; titleJa: string; items: string[]; itemsJa: string[] }[];
  requirements: string[];
  requirementsJa: string[];
  benefits: string[];
  benefitsJa: string[];
}

export const programsData: ProgramDetail[] = [
  {
    slug: 'tokutei-ginou',
    badge: 'ssw',
    badgeLabel: 'Tokutei Ginou (SSW)',
    badgeLabelJa: '特定技能1号',
    title: 'Program Tokutei Ginou (Specified Skilled Worker / SSW)',
    titleJa: '特定技能1号 就労・育成プログラム (Tokutei Ginou)',
    tagline: 'Karier Profesional Bergaji Standar Jepang dengan Kontrak Kerja Resmi',
    taglineJa: '日本人と同等以上の待遇で、最長5年間の就業を可能に',
    description: 'Program unggulan LPK Saindo untuk penempatan kerja resmi berketerampilan khusus di Jepang (Tokutei Ginou No. 1). Pelatihan mencakup 4 tahapan kelas terstruktur: Kelas Pemula (dari 0), Kelas JFT-Basic A2, Kelas SSW bidang keahlian, dan Kelas Persiapan Matching / Kaiwa intensif bersama instruktur profesional dan penutur asli (native speaker).',
    descriptionJa: 'LPK Saindoの主力プログラム。即戦力としての専門実技試験対策と日本語教育を統合。初心者向け基礎クラスからJFT対策、特定技能測定試験対策、模擬面接・会話クラスまでを体系的に指導し、日本全国の受入企業へマッチングします。',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    duration: '4 — 6 Bulan Pelatihan Terpadu',
    durationJa: '4〜6ヶ月（技能測定試験対策含む）',
    target: 'Sertifikat Keahlian SSW + JFT-Basic A2 / JLPT N4',
    targetJa: '各分野技能測定試験合格 ＋ JFT-Basic A2',
    schedule: 'Senin – Jumat (Pelatihan Bahasa & Praktik Kejuruan)',
    scheduleJa: '月曜〜金曜（座学および実技訓練）',
    pricing: 'Biaya Pendidikan Rp 10 Jt (dari 0) / Rp 5 Jt (jika ada JFT) • Matching Job Rp 31 Jt (Include Visa & Tiket)',
    pricingJa: '基礎講習 1,000万ルピア〜 / 就労マッチング 3,100万ルピア（ビザ・航空券込）',
    syllabus: [
      {
        title: 'Kelas 1: Pemula (Belajar dari Nol)',
        titleJa: '第1段階：初心者クラス（ゼロからの日本語）',
        items: [
          'Penguasaan huruf Hiragana dan Katakana serta variasi bunyi dan pelafalan standar',
          'Pola kalimat dasar dan tata bahasa pemula Minna no Nihongo bab 1–25',
          'Pelatihan percakapan sehari-hari dan perkenalan diri (Jikoshoukai) dengan Native Speaker',
        ],
        itemsJa: [
          'ひらがな・カタカナの読み書きと正確な標準発音指導',
          '初級文法第1課〜第25課の基礎構文および日常会話表現の習得',
          '日本人ネイティブ講師による自己紹介（ジコショウカイ）徹底反復練習',
        ],
      },
      {
        title: 'Kelas 2: Persiapan Ujian JFT-Basic A2',
        titleJa: '第2段階：JFT-Basic A2 集中試験対策クラス',
        items: [
          'Penguasaan 300+ Kanji dasar dan ribuan kosakata situasi kehidupan industri di Jepang',
          'Latihan intensif pemahaman mendengar (Choukai) dan membaca cepat (Dokkai)',
          'Simulasi ujian mingguan berbasis komputer (CBT) dengan sistem penilaian akurat',
        ],
        itemsJa: [
          '生活・職場必須漢字300字と重要語彙の定着',
          'ネイティブスピードによる聴解集中トレーニングと読解演習',
          '本番同様のCBT模擬試験と個別弱点補強による合格保証指導',
        ],
      },
      {
        title: 'Kelas 3: Keahlian Teknis SSW (Specified Skills)',
        titleJa: '第3段階：特定技能 専門分野実技・用語対策クラス',
        items: [
          'Penguasaan istilah teknis sektor kerja (Pengolahan Makanan, Pertanian, Kaigo, dsb.)',
          'Standar kebersihan HACCP, keselamatan kerja 5S, dan simulasi penanganan operasional',
          'Pembahasan bank soal dan try-out ujian keahlian industri (Senmon Tesuto)',
        ],
        itemsJa: [
          '職種別専門用語（飲食料品製造・農業・介護等）の完全マスター',
          'HACCP衛生管理・労働安全衛生5S・作業手順書の読解演習',
          '過去問題演習および技能測定実技試験のシミュレーション',
        ],
      },
      {
        title: 'Kelas 4: Persiapan Matching Job & Kaiwa Intensif',
        titleJa: '第4段階：マッチング・面接・実践会話（Kaiwa）クラス',
        items: [
          'Simulasi wawancara kerja (Menseki) langsung dengan perwakilan perusahaan/user Jepang',
          'Latihan etika kerja korporat Jepang: Ojigi (salam), Horenso, dan komunikasi formal',
          'Pembuatan berkas riwayat hidup resmi (Rirekisho) dan persiapan penandatanganan kontrak kerja',
        ],
        itemsJa: [
          '受入企業採用担当者とのWEB・対面面接対策およびロールプレイング',
          'お辞儀・報連相・ビジネスマナーの実践徹底指導',
          '公式履歴書（Rirekisho）の添削と内定承諾・雇用契約ガイダンス',
        ],
      },
    ],
    requirements: [
      'Pria/Wanita usia minimal 18 tahun',
      'Pendidikan minimal SMA/SMK/MA sederajat atau D3/S1',
      'Sehat jasmani dan rohani, tidak buta warna total',
      'Memiliki komitmen belajar tinggi dan motivasi kuat untuk bekerja di Jepang',
    ],
    requirementsJa: [
      '満18歳以上の健康な男女',
      '高校卒業以上の学歴（元技能実習生の特定技能移行も歓迎）',
      '心身ともに健康であり、就労に適した健康状態であること',
      '日本で誠実に働き、高い向上心と学習意欲を持つ方',
    ],
    benefits: [
      'Gaji standar UMR Jepang (berkisar ¥180.000 – ¥240.000 / bln)',
      'Asuransi kesehatan, jaminan pensiun (Nenkin), dan perlindungan ketenagakerjaan resmi',
      'Fasilitas asrama atau subsidi tempat tinggal oleh perusahaan penerima di Jepang',
      'Dukungan matching job langsung, pengurusan Visa, dan tiket pesawat ke Jepang',
    ],
    benefitsJa: [
      '日本人と同等以上の給与水準（月給18万〜24万円程度＋各種手当）',
      '社会保険・健康保険・厚生年金・労災保険への完全加入',
      '家具家電付き社員寮の手配または住宅手当支給',
      '迅速なマッチング、査証申請（COE）、渡航航空券手配のワンストップ対応',
    ],
  },
  {
    slug: 'engineer-gijinkoku',
    badge: 'neutral',
    badgeLabel: 'Engineer / Gijinkoku',
    badgeLabelJa: '技術・人文知識・国際業務',
    title: 'Program Engineer & Profesional (Gijinkoku / 技人国)',
    titleJa: '技術・人文知識・国際業務 人材育成・就労支援プログラム',
    tagline: 'Karier Profesional Bergaji Tinggi bagi Lulusan D3 / S1 di Industri Jepang',
    taglineJa: '大卒・高専卒向け：エンジニア・総合職としての日本就職支援',
    description: 'Jalur kerja profesional berkeahlian tinggi untuk lulusan Diploma (D3) dan Sarjana (S1) dengan status visa "Gijutsu, Jinbun Chishiki, Kokusai Gyoumu" (Engineer / Specialist in Humanities / International Services). LPK Saindo membina kemampuan bahasa Jepang bisnis, etika wawancara korporat, dan menghubungkan Anda dengan posisi engineer, perancangan teknik, IT, dan staf manajemen di perusahaan Jepang.',
    descriptionJa: 'インドネシアの理工系・文系大学および高専卒業生（D3/S1）を対象に、技術・人文知識・国際業務ビザでの日本企業就職を全面バックアップ。ビジネス日本語、IT・機械工学専門用語、日本企業向けエントリーシート添削と面接指導を実施します。',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    duration: '3 — 6 Bulan Persiapan Intensif',
    durationJa: '3〜6ヶ月（ビジネス日本語・専門指導）',
    target: 'Penempatan Kerja Visa Engineer / Gijinkoku + JLPT N3/N2',
    targetJa: '技人国ビザ取得・日本企業正規内定獲得',
    schedule: 'Senin – Jumat (Bahasa Jepang Bisnis & Portofolio Karir)',
    scheduleJa: '月曜〜金曜（ビジネス日本語およびポートフォリオ作成）',
    pricing: 'Konsultasi Penempatan Karir & Matching Terpadu',
    pricingJa: '学歴・専攻に応じた個別就労マッチング支援',
    syllabus: [
      {
        title: 'Tahap 1: Bahasa Jepang Bisnis & Keigo Profesional',
        titleJa: '第1期：ビジネス日本語・敬語表現の徹底指導',
        items: [
          'Penggunaan ragam bahasa hormat: Kenjougo, Sonkeigo, dan Teineigo dalam komunikasi kantor',
          'Etika penulisan email bisnis dan korespondensi resmi perusahaan Jepang',
          'Kosakata teknis spesifik jurusan (IT, Mesin, Elektro, Konstruksi, Desain, Bisnis)',
        ],
        itemsJa: [
          '尊敬語・謙譲語・丁寧語の使い分けとビジネスシーンでの実践練習',
          '日本企業標準のビジネスEメールおよび社内文書の作成演習',
          '専攻分野に応じたIT・工学・会計・国際ビジネス専門用語の習得',
        ],
      },
      {
        title: 'Tahap 2: Standardisasi Portofolio & Bedah Rirekisho',
        titleJa: '第2期：日本式履歴書・職務経歴書・技術ポートフォリオ作成',
        items: [
          'Penyusunan Rirekisho dan Shokumu Keirekisho berbobot tinggi berstandar HR Jepang',
          'Penyusunan portofolio proyek teknik dan sertifikasi kompetensi keahlian',
          'Penajaman pemikiran logis (Logic Tree, MECE) dan pemecahan masalah di tempat kerja',
        ],
        itemsJa: [
          '人事の目を惹く自己PR・研究概要・志望動機の言語化とブラッシュアップ',
          '開発実績・設計実績を伝えるポートフォリオの作成指導',
          '論理的思考力と問題解決力をアピールするプレゼンテーション演習',
        ],
      },
      {
        title: 'Tahap 3: Simulasi Interview Korporat & Penyaluran Kerja',
        titleJa: '第3期：役員面接シミュレーション・就労マッチング',
        items: [
          'Simulasi wawancara kerja teknis dan wawancara manajerial langsung dengan user korporat',
          'Pendampingan negosiasi paket benefit, slip gaji, dan kontrak kerja jangka panjang',
          'Pengurusan Certificate of Eligibility (COE) visa status Engineer dari Imigrasi Jepang',
        ],
        itemsJa: [
          '日本企業役員・人事担当者との個別採用面談の徹底シミュレーション',
          '労働条件通知書の精査・福利厚生ガイダンス・給与交渉サポート',
          '出入国在留管理局への在留資格認定証明書（COE）申請手続き支援',
        ],
      },
    ],
    requirements: [
      'Pria/Wanita lulusan D3 / D4 / S1 (Teknik, IT, Bahasa, Ekonomi, atau rumpun sains/humaniora)',
      'Usia 21 – 35 tahun',
      'Memiliki kemampuan bahasa Jepang dasar atau berkomitmen belajar intensif hingga N3/N2',
      'Memiliki motivasi berkarier jangka panjang di korporasi Jepang',
    ],
    requirementsJa: [
      '理工系または文系学部の大卒（S1）・短大卒（D3）以上の学歴',
      '満21歳〜35歳の意欲的な男女',
      'JLPT N3以上相当（または集中講座受講により早期取得可能な方）',
      '日本で正社員・契約社員として長期就労を希望する方',
    ],
    benefits: [
      'Status karyawan profesional (Shain) dengan jenjang karier tanpa batas',
      'Gaji kompetitif standar industri profesional Jepang (¥200.000 – ¥350.000+ / bln)',
      'Bisa mengajukan visa tinggal jangka panjang dan membawa anggota keluarga (Kazoku Taizai)',
      'Hak asuransi ketenagakerjaan, bonus tahunan, dan tunjangan transportasi',
    ],
    benefitsJa: [
      '正規社員・専門職としての雇用および将来のキャリアアップの機会',
      '日本人大卒と同等以上の高給与水準（月給20万〜35万円以上＋賞与）',
      '家族帯同ビザの申請および将来的な永住申請への道',
      '各種社会保険完備・通勤手当・住宅手当・福利厚生制度',
    ],
  },
  {
    slug: 'matching-job',
    badge: 'neutral',
    badgeLabel: 'Matching Job',
    badgeLabelJa: '就労マッチング',
    title: 'Program Matching Job (Siswa Saindo & Siswa Mandiri/Luar)',
    titleJa: '求人マッチング・就労支援プログラム（在校生・既卒・有資格者向け）',
    tagline: 'Penyaluran Kerja Cepat ke Perusahaan Jepang — Termasuk Visa & Tiket Pesawat',
    taglineJa: 'JFT・特定技能資格保持者への迅速な企業マッチング・査証手配',
    description: 'LPK Saindo membuka program Matching Job terpadu bagi siswa internal maupun siswa mandiri/luar yang telah memiliki sertifikasi JFT-Basic dan kelulusan ujian SSW. Kami memfasilitasi wawancara langsung dengan pimpinan perusahaan di Jepang hingga terbitnya izin tinggal (COE). Biaya sangat transparan dan SUDAH TERMASUK pengurusan Visa kerja dan Tiket Pesawat menuju Jepang.',
    descriptionJa: 'LPK Saindoは、当校の受講生のみならず、すでにJFT-Basic A2および特定技能評価試験に合格している一般・外部の有資格者向けにも、優良受入企業とのマッチング支援を提供しています。在留資格申請からビザ発給、渡航用航空券の手配まで一貫してサポートします。',
    heroImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
    duration: '1 — 3 Bulan (Proses Seleksi s/d Terbit COE)',
    durationJa: '1〜3ヶ月（面接実施からCOE取得まで）',
    target: 'Mendapatkan Surat Kontrak Kerja Resmi & Visa Jepang',
    targetJa: '内定獲得・COE交付・就労ビザ取得',
    schedule: 'Fleksibel Menyesuaikan Jadwal Wawancara User Jepang',
    scheduleJa: '受入企業の採用スケジュールに合わせて随時実施',
    pricing: 'Siswa Saindo: Rp 31 Jt • Siswa Luar/Mandiri: Rp 28 Jt (Include Visa & Tiket Pesawat)',
    pricingJa: 'Saindo修了生: 3,100万ルピア / 外部有資格者: 2,800万ルピア（ビザ・航空券込）',
    syllabus: [
      {
        title: 'Tahap 1: Verifikasi Dokumen & Pengajuan Rirekisho',
        titleJa: '第1期：資格照会および公式履歴書の審査登録',
        items: [
          'Verifikasi keabsahan sertifikat JFT-Basic A2 / JLPT dan sertifikat kelulusan SSW',
          'Penyesuaian format berkas riwayat hidup (Rirekisho) ke standar perusahaan Jepang',
          'Pencocokan minat bidang kerja (Pengolahan Makanan, Kaigo, Pertanian, Konstruksi, dll.)',
        ],
        itemsJa: [
          'JFT-Basic A2 / JLPT合格証および特定技能評価試験合格証の照合・確認',
          '日本企業向け指定履歴書フォーマットの作成・登録',
          '希望業種（食品・介護・農業・外食等）および希望地域に応じたマッチング',
        ],
      },
      {
        title: 'Tahap 2: Bimbingan Wawancara Khusus (Menseki Training)',
        titleJa: '第2期：面接直前トレーニング・模擬面接指導',
        items: [
          'Pembekalan jawaban untuk pertanyaan umum dan studi kasus wawancara user',
          'Latihan pengucapan intonasi jelas, kontak mata, dan salam ojigi yang tepat',
          'Simulasi wawancara online melalui Zoom / Google Meet dengan evaluator',
        ],
        itemsJa: [
          '志望動機・自己PR・現場適性に関する想定問答の反復トレーニング',
          '発声・姿勢・礼儀作法（お辞儀の角度・入退室マナー）の最終確認',
          'WEB面接ツール（Zoom/Google Meet）を用いた本番想定リハーサル',
        ],
      },
      {
        title: 'Tahap 3: Kontrak Kerja, Visa & Keberangkatan',
        titleJa: '第3期：雇用契約締結・査証申請・渡航手配',
        items: [
          'Penjelasan klausul kontrak kerja resmi (Koyou Keiyakusho) dan hak ketenagakerjaan',
          'Pengurusan dokumen Certificate of Eligibility (COE) dan penerbitan Visa kerja',
          'Pemesanan tiket pesawat terbang langsung menuju kota penempatan di Jepang',
        ],
        itemsJa: [
          '雇用条件書・就業規則の丁寧な説明と雇用契約の締結',
          '出入国在留管理局への在留資格認定（COE）申請および日本大使館でのビザ発給',
          '日本への渡航用航空券の手配と出国前オリエンテーションの実施',
        ],
      },
    ],
    requirements: [
      'Untuk Siswa Internal Saindo: Telah menuntaskan program kelas pelatihan di LPK Saindo',
      'Untuk Siswa Mandiri/Luar: WAJIB telah memiliki sertifikat resmi JFT-Basic A2 (atau JLPT N4) DAN sertifikat kelulusan ujian SSW bidang terkait',
      'Sehat jasmani dan rohani, lulus pemeriksaan medis standar kerja Jepang',
      'Tidak memiliki catatan kriminal atau pelanggaran imigrasi',
    ],
    requirementsJa: [
      'Saindo受講生：所定の研修カリキュラムを修了していること',
      '外部・一般応募者：JFT-Basic A2（またはJLPT N4以上）および特定技能評価試験の合格証を既に保持していること',
      '海外就労基準の健康診断に合格していること',
      '犯罪歴や過去の不法滞在等の入管法違反歴がないこと',
    ],
    benefits: [
      'Biaya pasti & transparan: Rp 31 Jt (Siswa Saindo) / Rp 28 Jt (Siswa Mandiri/Luar)',
      'Sudah INCLUDE biaya pengurusan Visa resmi dan Tiket Pesawat ke Jepang',
      'Proses cepat dan aman langsung terhubung dengan user terpercaya di Jepang',
      'Pendampingan berkelanjutan sebelum berangkat hingga selama masa kontrak kerja di Jepang',
    ],
    benefitsJa: [
      '明朗会計：3,100万ルピア（在校生）/ 2,800万ルピア（外部有資格者）',
      '就労ビザ申請費用および日本行き渡航航空券代金込み',
      'ブローカーを一切介さない正規送出ルートによる迅速かつ安全なマッチング',
      '出国前の最終ガイダンスから日本での就業中・帰国後までの安心フォロー',
    ],
  },
  {
    slug: 'bahasa-jepang',
    badge: 'n4',
    badgeLabel: '4 Jenjang Kelas Pelatihan',
    badgeLabelJa: '4段階研修コース',
    title: '4 Kelas Pelatihan Bahasa Jepang & Ujian Sertifikasi',
    titleJa: '日本語・特定技能 4段階集中養成コース（初級〜面接準備）',
    tagline: 'Kurikulum Berjenjang dari Nol Hingga Siap Menghadapi Seleksi Kerja Jepang',
    taglineJa: '文字の基礎から特定技能合格、面接突破までを最短で駆け抜けるカリキュラム',
    description: 'LPK Saindo menyelenggarakan 4 tahapan kelas yang dirancang terarah: (1) Kelas Pemula Belajar dari 0, (2) Kelas Ujian JFT-Basic A2, (3) Kelas Keterampilan Teknis SSW, dan (4) Kelas Persiapan Matching & Percakapan (Kaiwa). Anda dapat mulai belajar dari nol atau langsung bergabung di kelas lanjutan jika sudah mengantongi sertifikat JFT.',
    descriptionJa: '受講生の学習段階に合わせ、4つのクラスを開講しています。(1) ひらがなから学ぶ初心者クラス（ゼロスタート）、(2) JFT-Basic A2試験対策クラス、(3) 各分野の特定技能評価試験対策クラス、(4) 企業面接直前カイワ・マッチング準備クラス。受講生の目標に合わせた最短ルートを提供します。',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    duration: '1 — 4 Bulan (Sesuai Jenjang Kelas yang Dipilih)',
    durationJa: '1〜4ヶ月（選択コース別）',
    target: 'Kelulusan Ujian JFT-Basic A2, Ujian SSW & Mahir Wawancara',
    targetJa: 'JFT-Basic A2・特定技能評価試験合格および面接突破',
    schedule: 'Senin – Jumat (08.00 – 16.00 WIB)',
    scheduleJa: '月曜〜金曜（08:00〜16:00 WIB）',
    pricing: 'Paket Dari Nol s/d Persiapan Matching: Rp 10 Juta • Masuk Kelas SSW/Matching (Sudah ada JFT): Rp 5 Juta',
    pricingJa: 'ゼロからマッチング準備まで：1,000万ルピア / JFT保持者の途中参加：500万ルピア',
    syllabus: [
      {
        title: 'Kelas 1: Pemula (Belajar dari Nol)',
        titleJa: '第1クラス：初心者クラス（文字と基礎文法）',
        items: [
          'Pengenalan & penulisan 46 Hiragana, 46 Katakana, dan pelafalan standar aksen Tokyo',
          'Pola kalimat dasar buku Minna no Nihongo bab 1–12',
          'Latihan perkenalan diri (Jikoshoukai) dan percakapan salam sehari-hari',
        ],
        itemsJa: [
          'ひらがな・カタカナの正確な筆順と発音指導',
          '初級文法第1課〜第12課の基本文型演習',
          '毎日の挨拶・自己紹介（ジコショウカイ）の反復発声',
        ],
      },
      {
        title: 'Kelas 2: Persiapan JFT (JFT-Basic A2)',
        titleJa: '第2クラス：JFT-Basic A2 合格特訓クラス',
        items: [
          'Pola kalimat Minna no Nihongo bab 13–25 dan penguasaan kosakata Irodori',
          'Penguasaan 150+ kanji dasar dan latihan listening (Choukai)',
          'Simulasi ujian mingguan berbasis CBT di lab komputer',
        ],
        itemsJa: [
          '初級文法第13課〜第25課と生活語彙の習得',
          'N5/N4レベル必須漢字150字と聴解問題演習',
          'PC教室での毎週のCBT模擬試験と弱点補強',
        ],
      },
      {
        title: 'Kelas 3: Keterampilan SSW (Specified Skilled Worker)',
        titleJa: '第3クラス：特定技能 専門科目試験対策クラス',
        items: [
          'Kosakata teknis industri pengolahan makanan, perawat lansia (Kaigo), dan pertanian',
          'Praktik standar keselamatan kerja, sanitasi, dan tata tertib pabrik',
          'Bedah kisi-kisi soal resmi Prometric dan try-out kelulusan',
        ],
        itemsJa: [
          '食品製造・介護・農業分野の専門用語と指示文の読解',
          '衛生管理基準・現場マナー・安全保護具の取り扱い',
          'プロメトリック公式試験対策と過去問演習',
        ],
      },
      {
        title: 'Kelas 4: Persiapan Matching & Percakapan (Kaiwa)',
        titleJa: '第4クラス：面接対策・実践会話（Kaiwa）クラス',
        items: [
          'Sesi percakapan intensif dibimbing langsung oleh Native Speaker orang Jepang',
          'Teknik menjawab pertanyaan user secara percaya diri dan taktis',
          'Latihan etika membungkuk (Ojigi), kontak mata, dan postur kerja Shisei',
        ],
        itemsJa: [
          '日本人ネイティブ講師による生きた会話トレーニング',
          '面接官の質問に対する明瞭な受け答えと逆質問の準備',
          '入退室マナー・お辞儀（会釈・敬礼）・視線の配り方の徹底',
        ],
      },
    ],
    requirements: [
      'Pria/Wanita usia minimal 18 tahun',
      'Pendidikan minimal SMA/SMK sederajat',
      'Untuk masuk Kelas SSW / Persiapan Matching langsung (biaya Rp 5 Jt): WAJIB sudah memiliki sertifikat kelulusan JFT-Basic A2',
      'Memiliki kedisiplinan dan kesungguhan tinggi untuk belajar',
    ],
    requirementsJa: [
      '満18歳以上の健康な男女',
      '高校卒業以上の学歴',
      '第3・第4クラス（受講料500万ルピア）への直接参加はJFT-Basic A2合格証の提出が必須',
      '時間を守り、学習意欲と向上心を持って取り組める方',
    ],
    benefits: [
      'Biaya terjangkau & transparan: Rp 10 Juta (dari 0) atau Rp 5 Juta (jika sudah ada JFT)',
      'Diajar langsung oleh Sensei profesional dan Native Speaker asli Jepang',
      'Fasilitas ruang belajar ber-AC, modul buku resmi, dan lab komputer CBT',
      'Jalur langsung menuju program Matching Job Saindo dengan biaya terjangkau',
    ],
    benefitsJa: [
      '明確な料金体系：1,000万ルピア（ゼロスタート）/ 500万ルピア（JFT保持者）',
      '日本人ネイティブ講師および有資格日本人材による指導',
      '冷暖房完備の教室・教材支給・CBT自習環境の提供',
      '受講修了後のスムーズな優良企業マッチングへの直結ルート',
    ],
  },
  {
    slug: 'magang-jepang',
    badge: 'magang',
    badgeLabel: 'Ginou Jisshuusei',
    badgeLabelJa: '技能実習制度',
    title: 'Program Pemagangan Industri (Ginou Jisshuusei)',
    titleJa: '外国人技能実習生 送出・育成プログラム',
    tagline: 'Membangun Keterampilan Teknik & Pengalaman Industri Nyata di Jepang',
    taglineJa: '日本の先進的なものづくり現場で実践技術と職業観を体得',
    description: 'Program pemagangan industri kerja sama resmi dengan Organisasi Pengawas (Kumiai) dan perusahaan penerima di Jepang. Peserta magang selama 3 hingga 5 tahun untuk menguasai keahlian manufaktur, permesinan, konstruksi, dan pertanian modern.',
    descriptionJa: '監理団体および受入企業様との提携に基づき、日本の製造業・建設・機械加工分野等で3〜5年間の実習を行う正規プログラムです。',
    heroImage: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    duration: '4 Bulan Pendidikan + 3–5 Tahun Magang di Jepang',
    durationJa: '事前講習4ヶ月 ＋ 日本での実習3〜5年間',
    target: 'Sertifikasi Kompetensi OTIT/JITCO & Pengalaman Kerja Internasional',
    targetJa: '技能実習評価試験合格・専門級取得',
    schedule: 'Intensif Full Boarding di Training Center',
    scheduleJa: '全寮制集中事前講習',
    pricing: 'Sesuai Ketentuan Resmi Program Magang',
    pricingJa: '技能実習法規に基づく適正手続費用',
    syllabus: [
      {
        title: 'Tahap 1: Pembinaan Mental, Fisik & Disiplin (FMD)',
        titleJa: '第1段階：心構え・体力づくり・規律訓練',
        items: [
          'Latihan fisik harian, lari pagi, dan pembentukan postur kerja tegap',
          'Penerapan 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) di seluruh area asrama',
          'Penanaman tata krama salam (Aisatsu) dan tata tertib hidup mandiri',
        ],
        itemsJa: [
          '毎日の体力トレーニングとラジオ体操・姿勢訓練',
          '宿舎および研修棟での5S環境整備の徹底',
          '発声・挨拶（アイサツ）・時間厳守の生活習慣化',
        ],
      },
      {
        title: 'Tahap 2: Bahasa Jepang Praktis Pabrik & Keselamatan Kerja',
        titleJa: '第2段階：現場用語・KYT（危険予知）訓練',
        items: [
          'Istilah teknis mesin, perkakas tangan, dan alat pelindung diri (APD)',
          'Simulasi Kiken Yochi Training (KYT) untuk mencegah kecelakaan kerja',
          'Latihan membaca rambu keselamatan dan etika kerja pabrik Jepang',
        ],
        itemsJa: [
          '機械操作・工具名称・安全保護具に関する専門用語',
          '労働災害を未然に防ぐKYT（危険予知訓練）の実践',
          '工場内の安全標識の読解と指差呼称（しさこしょう）',
        ],
      },
    ],
    requirements: [
      'Pria/Wanita usia 18 – 26 tahun',
      'Lulusan SMA/SMK (diutamakan jurusan Teknik Mesin/Otomotif/Elektro)',
      'Tinggi badan minimal: Pria 160 cm, Wanita 150 cm',
      'Tidak bertato, tidak bertindik, tidak memiliki riwayat cedera tulang berat',
    ],
    requirementsJa: [
      '満18歳〜26歳の意欲的な男女（工業高校出身者歓迎）',
      '身長：男子160cm以上、女子150cm以上',
      'タトゥー・ピアス跡・重度の骨折歴がないこと',
      '団体生活への適応力と協調性を備えていること',
    ],
    benefits: [
      'Uang saku magang standar resmi (setara Rp 15–22 juta per bulan)',
      'Asrama, fasilitas dapur, dan kebutuhan pokok bersubsidi',
      'Sertifikat resmi kompetensi kerja internasional dari pemerintah Jepang',
      'Bimbingan modal usaha dan jejaring kerja alumni setelah kembali ke tanah air',
    ],
    benefitsJa: [
      '法令遵守の手当・残業代支給（月収15万〜20万円水準）',
      '受入企業による家具・家電付き社員寮の手配',
      'OTIT・JITCO認定の修了証明書および公的資格',
      '帰国後の日系企業への就職斡旋および起業サポート',
    ],
  },
  {
    slug: 'simulasi-wawancara',
    badge: 'neutral',
    badgeLabel: 'Simulasi Seleksi',
    badgeLabelJa: '面接対策・マナー',
    title: 'Bimbingan Wawancara Kerja & Etika Bisnis Jepang',
    titleJa: '採用面接指導・ビジネスマナー徹底講座',
    tagline: 'Kunci Sukses Menaklukkan Wawancara Langsung dengan User Perusahaan Jepang',
    taglineJa: '自信を持って本番に臨むための模擬面接と履歴書添削',
    description: 'Program pembekalan komprehensif menghadapi proses seleksi kerja oleh pimpinan perusahaan dan Kumiai Jepang. Mencakup pembuatan Rirekisho standar, simulasi tanya-jawab terarah, penguasaan etika membungkuk (Ojigi), dan teknik mengutarakan motivasi kerja.',
    descriptionJa: '日本企業の人事担当者や監理団体役員との面接を想定し、第一印象・礼儀作法から志望動機の伝え方までを日本人専門講師が徹底指導します。',
    heroImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
    duration: '2 — 4 Minggu Pelatihan Terpadu',
    durationJa: '2〜4週間（集中特訓）',
    target: 'Tingkat Kelulusan Wawancara > 95%',
    targetJa: '面接合格率95％以上を達成',
    schedule: 'Sesi Khusus Menjelang Jadwal Wawancara User',
    scheduleJa: '面接選考日程に合わせて随時開講',
    pricing: 'Termasuk dalam Paket Persiapan Matching Job',
    pricingJa: 'マッチング支援パッケージに包括',
    syllabus: [
      {
        title: 'Sesi 1: Bedah Berkas Riwayat Hidup (Rirekisho)',
        titleJa: '第1回：履歴書（Rirekisho）の作成・ブラッシュアップ',
        items: [
          'Penulisan riwayat pendidikan, keahlian khusus, dan motivasi kerja yang memikat',
          'Koreksi tata bahasa bahasa Jepang formal (Keigo sederhana)',
          'Pemotretan foto formal berstandar standar korporat Jepang',
        ],
        itemsJa: [
          '自己PR・志望動機・得意分野の論理的な言語化',
          '丁寧語・謙譲語の基本を押さえた文章添削',
          '好印象を与える清潔感ある証明写真の撮影指導',
        ],
      },
      {
        title: 'Sesi 2: Tata Krama Masuk Ruangan & Bahasa Tubuh',
        titleJa: '第2回：入退室マナー・所作・表情指導',
        items: [
          'Teknik mengetuk pintu 3 kali, salam pembuka "Shitsurei Itashimasu"',
          'Sudut kemiringan membungkuk (Ojigi 15°, 30°, 45°) sesuai situasi',
          'Kontak mata, intonasi suara lantang, dan postur duduk tegak (Shisei)',
        ],
        itemsJa: [
          'ドアのノック（3回）と「失礼いたします」の発声',
          '状況に応じたお辞儀の角度（会釈15度・敬礼30度・最敬礼45度）',
          'アイコンタクト・ハキハキとした返答・美しい着席姿勢',
        ],
      },
    ],
    requirements: [
      'Peserta pelatihan LPK Saindo aktif yang bersiap mengikuti wawancara user',
      'Telah menguasai perkenalan diri bahasa Jepang lancar',
      'Berpenampilan rapi dengan seragam formal LPK Saindo',
    ],
    requirementsJa: [
      '採用面接を控えたSaindo受講生',
      '基本的な自己紹介がスムーズに話せること',
      '指定の制服またはリクルートスーツを着用すること',
    ],
    benefits: [
      'Rekaman video latihan wawancara untuk evaluasi mandiri',
      'Bank soal wawancara perusahaan Jepang terpopuler beserta kunci jawaban ideal',
      'Peningkatan rasa percaya diri dan ketenangan mental saat wawancara nyata',
    ],
    benefitsJa: [
      '模擬面接動画の録画・フィードバックによる客観的振り返り',
      '過去の頻出質問集と模範回答パターンの提供',
      '本番での緊張を克服する実践的自信の醸成',
    ],
  },
];
