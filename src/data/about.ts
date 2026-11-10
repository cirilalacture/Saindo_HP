export interface StaffProfile {
  name: string;
  role: string;
  roleJa: string;
  bio: string;
  bioJa: string;
  image: string;
  experience: string;
}

export interface FacilityItem {
  title: string;
  titleJa: string;
  desc: string;
  descJa: string;
  image: string;
}

export const leadershipAndStaff: StaffProfile[] = [
  {
    name: 'Drs. H. Bambang Suryono, M.M.',
    role: 'Direktur Utama / Pimpinan Lembaga',
    roleJa: '代表取締役 / 機関長',
    bio: 'Berpengalaman lebih dari 15 tahun di bidang manajemen pendidikan vokasi dan hubungan bilateral ketenagakerjaan Indonesia–Jepang.',
    bioJa: '職業教育および日印二国間人材交流の分野で15年以上のマネジメント実績を有する。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    experience: '15+ Tahun Pengalaman',
  },
  {
    name: 'Kenji Takahashi (高橋 健二)',
    role: 'Kepala Instruktur Bahasa Jepang (Native Speaker)',
    roleJa: '日本語教育主任（ネイティブ教員）',
    bio: 'Mantan dosen bahasa Jepang di Tokyo dengan sertifikasi pengajaran bahasa Jepang profesional (Japanese Language Teaching Competency Test).',
    bioJa: '日本語教育能力検定試験合格。元都内日本語学校教員として、外国人実習生への指導歴多数。',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    experience: '12+ Tahun Mengajar',
  },
  {
    name: 'Siti Rahmawati, S.S., M.Hum.',
    role: 'Wakil Kepala Akademik & Kurikulum JLPT',
    roleJa: '教務副主任・カリキュラム開発',
    bio: 'Lulusan Sastra Jepang Universitas terkemuka, pemegang sertifikasi JLPT N1 dengan spesialisasi metodologi pembelajaran akselerasi kanji.',
    bioJa: '大学日本文学科修士修了。JLPT N1保持。漢字および読解指導のエキスパート。',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    experience: '8+ Tahun di LPK Saindo',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Instruktur Disiplin & Etika Kerja (Ex-Kenshuusei)',
    roleJa: '生活指導・ビジネスマナー担当（元実習生）',
    bio: 'Alumni program magang di Aichi Prefecture selama 5 tahun yang membina kedisiplinan 5S dan ketahanan fisik peserta di asrama.',
    bioJa: '愛知県での5年間の実習経験を活かし、寮生活での5S指導と現場適応メンタルトレーニングを担当。',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    experience: 'Ex-Toyota Subcontractor Aichi',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    title: 'Ruang Kelas Teori Ber-AC & Multimedia',
    titleJa: '冷暖房・プロジェクター完備の座学教室',
    desc: 'Ruang kelas berkapasitas maksimal 20 siswa untuk menjamin fokus belajar tatap muka yang intensif dan interaktif.',
    descJa: '1クラス定員20名の少人数制により、教員と受講生の濃密な対話を促す学習環境を整備。',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Laboratorium Komputer Ujian CBT',
    titleJa: 'CBT模擬試験専用PCルーム',
    desc: 'Fasilitas 30 unit komputer terkoneksi server simulasi untuk persiapan try-out ujian JFT-Basic dan Prometric Tokutei Ginou.',
    descJa: '本番のJFT-Basicおよびプロメトリック技能試験に即したオンラインテスト演習が可能。',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Gedung Asrama Putra & Putri Mandiri',
    titleJa: '男子寮・女子寮（全寮制生活棟）',
    desc: 'Asrama berjarak dekat dengan pusat pelatihan, menerapkan piket kebersihan harian, jadwal disiplin ketat, dan keamanan 24 jam.',
    descJa: '24時間セキュリティを完備。自炊設備・共同生活規律を通じて、自立心と協調性を育む。',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Area Praktik Simulasi Kerja & FMD',
    titleJa: '屋外体力練成場・職種別実技スペース',
    desc: 'Lapangan terbuka untuk latihan fisik pagi, pembentukan postur tubuh, serta ruang simulasi kejuruan pengolahan makanan.',
    descJa: '毎朝の点呼・ラジオ体操・体力測定を行うグラウンドおよび安全衛生実習エリア。',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
];
