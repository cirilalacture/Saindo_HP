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
    roleJa: '創設者・代表 (Founder & Director)',
    bio: 'Pendiri LPK Sukses Abadi Indonesia (Saindo Passion Global) di Sragen. Berdedikasi membimbing dan mengantarkan generasi muda daerah meraih masa depan sukses di Jepang melalui jalur resmi, transparan, dan terpercaya.',
    bioJa: 'LPK Sukses Abadi Indonesia（Saindo Passion Global）創設者兼代表。誠実かつ透明性の高い送出体制で、青少年の日本でのキャリア実現に情熱を注ぐ。',
    image: '/assets/leadership/pimpinan.png',
    experience: 'Founder & Pimpinan',
  },
  {
    name: 'Tomita sensei (富田先生)',
    role: 'Staf Native & Instruktur Kelas Matching Job',
    roleJa: '日本人ネイティブ講師・マッチング対策主任',
    bio: 'Pengajar penutur asli Jepang (native speaker) yang membimbing aksen alami, tata bahasa percakapan bisnis, serta persiapan wawancara user dalam kelas Matching Job.',
    bioJa: '日本人専任教員として、生きた日本語の発音・敬語指導および日系受入企業との最終採用面接（メンセツ）対策を直接トレーニング。',
    image: '/assets/staff/placeholder-sensei.svg',
    experience: 'Pengajar Native Asli Jepang',
  },
  {
    name: 'Nara sensei (奈良先生)',
    role: 'Staf Native Speaker Bahasa Jepang',
    roleJa: '日本人ネイティブ講師・会話（Kaiwa）指導',
    bio: 'Pengajar penutur asli Jepang yang melatih pemahaman budaya kerja, etika komunikasi Horenso, serta kemampuan mendengar (Choukai) siswa sehari-hari.',
    bioJa: '日本人講師として、日常会話（Kaiwa）、聴解力向上、報連相（ホウレンソウ）をはじめとする日本特有のビジネスマナーを指導。',
    image: '/assets/staff/nara-sensei.png',
    experience: 'Pengajar Native Asli Jepang',
  },
  {
    name: 'Joko sensei',
    role: 'Instruktur Kelas SSW (Tokutei Ginou)',
    roleJa: '特定技能（SSW）専門クラス主任講師',
    bio: 'Instruktur spesialis kurikulum Tokutei Ginou berbekal pengalaman kerja langsung selama 5 tahun di Jepang. Mengawal penguasaan istilah teknis dan ujian keahlian industri.',
    bioJa: '日本での5年間の実務実績を誇る専任指導員。特定技能測定試験の専門用語解説から現場即応スキルの定着までを指導。',
    image: '/assets/staff/joko-sensei.jpg',
    experience: '5 Tahun Kerja di Jepang',
  },
  {
    name: 'Yopi sensei',
    role: 'Instruktur Kelas Shokyu / Awal',
    roleJa: '初級（入門）クラス専任講師',
    bio: 'Pengajar kelas dasar pemula (Shokyu) alumni program IM Japan selama 3 tahun. Berfokus pada penguasaan huruf Kana, Kanji dasar, dan pondasi tata bahasa Minna no Nihongo.',
    bioJa: 'IM Japanプログラム修了（日本での3年間の実務経験者）。平仮名・片仮名・基礎漢字の書き取りから丁寧な導入教育を担当。',
    image: '/assets/staff/yopi-sensei.jpg',
    experience: '3 Thn Program IM Japan',
  },
  {
    name: 'Aan sensei',
    role: 'Pelatih Fisik, Kebugaran & Disiplin',
    roleJa: '体力練成・健康管理・生活指導担当',
    bio: 'Membina ketahanan fisik, postur, kebugaran jasmani, dan kedisiplinan harian asrama siswa berbekal pengalaman kerja di industri Jepang selama 3 tahun.',
    bioJa: '日本での3年間の就労経験に基づき、日本の現場で通用する強健な体力づくり、朝の点呼、寮生活の衛生・生活規律を指導。',
    image: '/assets/staff/aan-sensei.jpg',
    experience: '3 Tahun Kerja di Jepang',
  },
  {
    name: 'Rudi sensei',
    role: 'Staf Administrasi & Marketing',
    roleJa: '事務管理・広報マーケティング担当',
    bio: 'Mengelola alur pendaftaran siswa, kelengkapan berkas dokumen administrasi, serta layanan informasi kemitraan LPK Saindo secara profesional.',
    bioJa: '入学願書の受付、査証・在留資格申請書類の点検管理、外部受入企業・広報窓口業務を正確かつ迅速に対応。',
    image: '/assets/staff/rudi-sensei.png',
    experience: 'Tim Manajemen & Admisi',
  },
  {
    name: 'Jodi sensei',
    role: 'Penanggung Jawab Pendidikan & Staf IT',
    roleJa: '教務統括責任者・IT担当専任教員',
    bio: 'Penanggung jawab kurikulum dan sistem IT pendidikan di LPK Saindo. Berbekal pengalaman 7 tahun menempuh pendidikan di Nihongo Gakko serta bekerja secara profesional di Jepang.',
    bioJa: '日本国内での日本語学校修学および7年間の実務経験を活かし、LPK Saindoの教育カリキュラム統括とデジタルICT学習環境の構築を担当。',
    image: '/assets/staff/placeholder-sensei.svg',
    experience: '7 Thn di Jepang (Gakko & Kerja)',
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
