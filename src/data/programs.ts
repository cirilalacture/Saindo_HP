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
  syllabus: { title: string; titleJa: string; items: string[]; itemsJa: string[] }[];
  requirements: string[];
  requirementsJa: string[];
  benefits: string[];
  benefitsJa: string[];
}

export const programsData: ProgramDetail[] = [
  {
    slug: 'bahasa-jepang',
    badge: 'n4',
    badgeLabel: 'Bahasa Jepang',
    badgeLabelJa: '日本語集中教育',
    title: 'Kursus Intensif Bahasa Jepang (JLPT N5–N3 & JFT-Basic A2)',
    titleJa: '日本語能力試験 (JLPT) & JFT-Basic 集中対策講座',
    tagline: 'Fondasi Utama Sukses Bekerja dan Beradaptasi di Jepang',
    taglineJa: '日本での生活とキャリアを切り拓く確かな語学力',
    description: 'Program akselerasi pembelajaran bahasa Jepang dari nol (huruf Hiragana/Katakana) hingga mencapai level kompetensi kerja N4/N3 dan sertifikasi JFT-Basic A2. Menggunakan modul standar industri dan latihan percakapan intensif dengan instruktur berpengalaman.',
    descriptionJa: 'ひらがな・カタカナの初歩から、日本の職場や地域社会で円滑にコミュニケーションが取れるJLPT N4/N3・JFT-Basic A2レベルまでを最短で習得する集中カリキュラムです。',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    duration: '3 — 4 Bulan (Asrama Penuh)',
    durationJa: '3〜4ヶ月（全寮制）',
    target: 'Kelulusan JLPT N4 / N3 & JFT-Basic A2',
    targetJa: 'JLPT N4/N3 および JFT-Basic A2 合格',
    schedule: 'Senin – Jumat (07.30 – 16.30 WIB)',
    scheduleJa: '月曜〜金曜（07:30〜16:30）',
    syllabus: [
      {
        title: 'Bulan 1: Fondasi Tata Bahasa & Hiragana/Katakana',
        titleJa: '第1月：文字・基礎文法・発音指導',
        items: [
          'Penguasaan 46 Hiragana & 46 Katakana beserta variasi bunyi',
          'Pola kalimat dasar Minna no Nihongo Bab 1–12',
          'Latihan pelafalan standar aksen Tokyo dan perkenalan diri (Jikoshoukai)',
        ],
        itemsJa: [
          'ひらがな・カタカナの正確な読み書きと発音',
          '初級文法第1課〜第12課の基礎構文習得',
          '面接に直結する自己紹介（ジコショウカイ）の徹底練習',
        ],
      },
      {
        title: 'Bulan 2: Kosakata Kerja, Kanji Dasar & Kaiwa',
        titleJa: '第2月：必須漢字・職場語彙・実践会話',
        items: [
          'Penguasaan 150 Kanji dasar level N5/N4',
          'Pola kalimat Minna no Nihongo Bab 13–25',
          'Praktik percakapan situasi harian (berbelanja, stasiun, bank, rumah sakit)',
        ],
        itemsJa: [
          'N5/N4レベルの必須漢字150字の習得',
          '初級文法第13課〜第25課と複文表現',
          '買い物・交通機関・役所等での場面別会話練習',
        ],
      },
      {
        title: 'Bulan 3–4: Pemantapan N4/N3, JFT CBT & Simulasi Ujian',
        titleJa: '第3〜4月：JFT/JLPT実戦演習・模擬試験',
        items: [
          'Penguasaan 300 Kanji N4 dan istilah teknis industri Jepang',
          'Latihan listening intensif (Choukai) berkecepatan penutur asli',
          'Simulasi ujian berbasis komputer (CBT) mingguan dengan sistem evaluasi akurat',
        ],
        itemsJa: [
          'N4必須漢字300字と産業別専門用語',
          'ネイティブスピードによる聴解集中トレーニング',
          '本番同様のCBT模擬試験と個別弱点補強',
        ],
      },
    ],
    requirements: [
      'Pria/Wanita usia 18 – 28 tahun',
      'Pendidikan minimal SMA/SMK/MA sederajat',
      'Sehat jasmani dan rohani, tidak buta warna',
      'Memiliki komitmen tinggi untuk disiplin tinggal di asrama',
    ],
    requirementsJa: [
      '満18歳〜28歳の健康な男女',
      '高校・専門高校卒業以上の学歴',
      '心身ともに健康であり、色覚異常がないこと',
      '規律ある寮生活を厳守できる高い向上心',
    ],
    benefits: [
      'Modul belajar resmi, kamus kanji, dan buku latihan soal',
      'Bimbingan langsung dari native speaker dan sensei bersertifikat',
      'Fasilitas asrama, ruang belajar ber-AC, dan lab komputer ujian',
      'Garansi bimbingan try-out hingga lulus ujian sertifikasi resmi',
    ],
    benefitsJa: [
      '公式教材・テキスト・漢字練習帳の無償貸与',
      '日本人教員および有資格講師による個別指導',
      '冷房完備の教室・CBT自習PC室・寮の利用',
      '合格水準に達するまでの徹底した補習サポート',
    ],
  },
  {
    slug: 'tokutei-ginou',
    badge: 'ssw',
    badgeLabel: 'Tokutei Ginou',
    badgeLabelJa: '特定技能1号',
    title: 'Program Specified Skilled Worker (SSW / Tokutei Ginou)',
    titleJa: '特定技能1号 人材育成・就労支援プログラム',
    tagline: 'Karier Profesional Bergaji Standar Jepang dengan Kontrak Kerja Resmi',
    taglineJa: '日本人と同等以上の待遇で、最長5年間の就業を可能に',
    description: 'Jalur penempatan kerja resmi berketerampilan khusus di Jepang dengan visa Tokutei Ginou No. 1. Pelatihan dirancang khusus untuk sektor industri prioritas: Pengolahan Makanan (Food Manufacturing), Perawat Lansia (Kaigo), dan Pertanian Modern.',
    descriptionJa: '即戦力としての専門知識・実技試験対策と日本語教育を統合。飲食料品製造業・介護・農業分野を中心とする日本全国の優良受入企業へ派遣します。',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    duration: '4 — 6 Bulan (Termasuk Ujian Skill)',
    durationJa: '4〜6ヶ月（技能測定試験対策含む）',
    target: 'Sertifikat Ujian Keahlian Sektor + JFT A2/N4',
    targetJa: '各分野技能測定試験合格 ＋ JFT-Basic A2',
    schedule: 'Senin – Sabtu (Pelatihan Bahasa & Praktik Kejuruan)',
    scheduleJa: '月曜〜土曜（座学および実技訓練）',
    syllabus: [
      {
        title: 'Bagian 1: Bahasa Jepang Spesifik Bidang Pekerjaan',
        titleJa: '第1部：職種別専門日本語・指示理解',
        items: [
          'Kosakata teknis alat kerja, keselamatan kerja, dan standar operasional',
          'Praktik memahami instruksi lisan dari pengawas kerja (Shiji)',
          'Simulasi penanganan kendala darurat dan pelaporan masalah',
        ],
        itemsJa: [
          '現場器具・安全衛生基準・作業手順書の語彙習得',
          '上司からの作業指示の正確な聞き取りと復唱確認',
          '異常発生時の緊急連絡と報告訓練',
        ],
      },
      {
        title: 'Bagian 2: Praktik Standar Higienis & Prosedur Kejuruan',
        titleJa: '第2部：安全衛生・実技シミュレーション',
        items: [
          'Standar HACCP dan sanitasi kebersihan industri makanan',
          'Etika perawatan lansia, mobilitas pasien, dan empati komunikasi (Sektor Kaigo)',
          'Simulasi ujian keahlian teori dan praktik (Senmon Tesuto)',
        ],
        itemsJa: [
          'HACCP基準に基づく衛生管理と異物混入防止',
          '車椅子移乗・介助技術・傾聴コミュニケーション（介護分野）',
          '特定技能評価試験の過去問演習と実技リハーサル',
        ],
      },
      {
        title: 'Bagian 3: Wawancara Perusahaan & Kontrak Kerja',
        titleJa: '第3部：企業面接・内定承諾・ビザ申請',
        items: [
          'Simulasi wawancara kerja daring langsung dengan user Jepang',
          'Penjelasan klausul kontrak kerja, slip gaji, dan tunjangan hidup',
          'Pemberkasan dokumen Certificate of Eligibility (COE) ke imigrasi Jepang',
        ],
        itemsJa: [
          '受入企業人事担当者とのWEB採用面接の徹底指導',
          '雇用条件書・給与明細・社会保険制度の事前ガイダンス',
          '出入国在留管理局への在留資格認定申請（COE）手続支援',
        ],
      },
    ],
    requirements: [
      'Pria/Wanita usia 18 – 35 tahun',
      'Pendidikan minimal SMA/SMK sederajat',
      'Memiliki motivasi tinggi dan bersedia bekerja kontrak 3–5 tahun di Jepang',
      'Lulus medical check-up standar tenaga kerja luar negeri',
    ],
    requirementsJa: [
      '満18歳〜35歳の心身ともに健康な男女',
      '高校卒業以上の学歴（元実習生の特定技能移行も歓迎）',
      '日本で3〜5年間誠実に就労する強い意志があること',
      '海外就労基準の健康診断（結核・肝炎等の既往症なし）',
    ],
    benefits: [
      'Gaji standar UMR Jepang (berkisar ¥180.000 – ¥240.000 / bln)',
      'Asuransi kesehatan, jaminan pensiun, dan perlindungan hukum ketenagakerjaan',
      'Fasilitas tempat tinggal/asrama bersubsidi',
      'Peluang perpanjangan kontrak hingga visa Tokutei Ginou No. 2',
    ],
    benefitsJa: [
      '日本人と同等水準の給与体系（月給18万〜24万円程度）',
      '雇用保険・健康保険・厚生年金・労災保険への完全加入',
      '家電・家具付き宿舎の提供または家賃補助制度',
      '特定技能2号へのステップアップによる長期在留の道',
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
    description: 'Program magang resmi kerja sama dengan Asosiasi Pengawas (Kumiai) dan perusahaan Jepang berlisensi OTIT/JITCO. Peserta magang selama 3 hingga 5 tahun untuk menguasai keahlian manufaktur, konstruksi, permesinan, dan otomotif.',
    descriptionJa: '監理団体および受入企業様との提携に基づき、日本のものづくり・建設・機械加工分野等で3〜5年間の実習を行う正規プログラムです。',
    heroImage: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    duration: '4 Bulan Pendidikan + 3–5 Tahun Magang di Jepang',
    durationJa: '事前講習4ヶ月 ＋ 日本での実習3〜5年間',
    target: 'Sertifikasi JITCO/OTIT & Pengalaman Kerja Internasional',
    targetJa: '技能実習評価試験合格・専門級取得',
    schedule: 'Intensif Full Boarding di Training Center',
    scheduleJa: '全寮制集中事前講習',
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
      'Tidak bertato, tidak bertindik, tidak pernah patah tulang berat',
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
