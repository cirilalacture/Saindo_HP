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
    name: 'Fatmanita Rochmadani',
    role: 'Pemilik & Pimpinan Lembaga (Founder & Owner)',
    roleJa: '代表者・創設者 (Founder & Owner)',
    bio: 'Pendiri LPK Sukses Abadi Indonesia (Saindo Passion Global) di Sragen. Berdedikasi membimbing dan mengantarkan putra-putri daerah meraih karier impian di Jepang melalui jalur resmi, transparan, dan terpercaya.',
    bioJa: 'LPK Sukses Abadi Indonesia（Saindo Passion Global）創設者兼代表。インドネシアの若者が適正・透明なルートで日本就労を果たせるよう、教育とマッチングに情熱を注ぐ。',
    image: '/assets/leadership/pimpinan.png',
    experience: 'Pendiri & Pimpinan LPK Saindo',
  },
  {
    name: 'Kenji Takahashi (高橋 健二)',
    role: 'Kepala Instruktur Bahasa Jepang (Native Speaker)',
    roleJa: '日本語教育主任（ネイティブ教員）',
    bio: 'Instruktur native speaker berpengalaman dengan sertifikasi pengajaran bahasa Jepang profesional. Membimbing pelafalan aksen Tokyo, kaiwa, dan simulasi wawancara user.',
    bioJa: '日本語教育能力検定合格。元都内日本語学校教員として、外国人実習生への指導歴多数。',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    experience: '12+ Tahun Pengalaman Mengajar',
  },
  {
    name: 'Siti Rahmawati, S.S., M.Hum.',
    role: 'Wakil Kepala Akademik & Kurikulum JLPT',
    roleJa: '教務副主任・カリキュラム開発',
    bio: 'Lulusan Sastra Jepang terkemuka pemegang sertifikasi JLPT N1 dengan spesialisasi metodologi akselerasi kosakata dan kanji untuk kelulusan JFT-Basic A2.',
    bioJa: '大学日本文学科修士修了。JLPT N1保持。漢字および読解指導のエキスパート。',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    experience: '8+ Tahun di Bidang Pendidikan Jepang',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Instruktur Disiplin & Etika Kerja (Ex-Kenshuusei)',
    roleJa: '生活指導・ビジネスマナー担当（元実習生）',
    bio: 'Alumni pekerja di industri Jepang selama 5 tahun yang membina kedisiplinan 5S, ketahanan fisik, etika salam (Ojigi), dan komunikasi Horenso di asrama.',
    bioJa: '愛知県での5年間の就労経験を活かし、寮生活での5S指導と現場適応メンタルトレーニングを担当。',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    experience: 'Ex-Industrial Practitioner in Japan',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    title: 'Ruang Kelas Teori Ber-AC & Multimedia',
    titleJa: '冷暖房・プロジェクター完備の座学教室',
    desc: 'Ruang kelas berkapasitas maksimal 20 siswa untuk menjamin fokus belajar tatap muka yang intensif dan interaktif.',
    descJa: '1クラス定員20名の少人数制により、教員と受講生の濃密な対話を促す学習環境を整備。',
    image: '/assets/facilities/fasilitas1.jpg',
  },
  {
    title: 'Modul Pembelajaran & Koleksi Buku Resmi',
    titleJa: '公式教材・Minna no Nihongo・JFT対策テキスト',
    desc: 'Koleksi buku kurikulum Minna no Nihongo, materi JFT-Basic A2, serta bank soal ujian Tokutei Ginou terlengkap.',
    descJa: '『みんなの日本語』全巻およびJFT-Basic・特定技能評価試験対策の公式テキストを常備。',
    image: '/assets/facilities/buku.jpg',
  },
  {
    title: 'Ruang Pelatihan & Diskusi Mandiri',
    titleJa: '自習室・グループディスカッションエリア',
    desc: 'Area belajar bersama yang kondusif untuk bimbingan simulasi wawancara kerja (mensetsu) dan pendalaman kaiwa.',
    descJa: '面接対策（メンセツ）や会話練習に集中できる開放的な自主学習スペース。',
    image: '/assets/facilities/fasilitas2.jpg',
  },
  {
    title: 'Gedung Kampus & Lingkungan Asrama Sragen',
    titleJa: 'スラゲン本部校舎・全寮制生活棟',
    desc: 'Pusat operasional dan asrama terpadu dengan lingkungan tenang di Kedawung, Sragen untuk mendukung kedisiplinan hidup.',
    descJa: '静穏で学習に集中できる環境。全寮制生活を通じて日本のビジネスマナーと生活習慣を定着。',
    image: '/assets/facilities/fasilitas3.jpg',
  },
];
