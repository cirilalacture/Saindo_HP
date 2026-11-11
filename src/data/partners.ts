export interface CompanyPartner {
  id: string;
  name: string;
  nameJa: string;
  shortName: string;
  sector: string;
  sectorJa: string;
  location: string;
  locationJa: string;
  programTag: string;
  programTagJa: string;
  description: string;
  descriptionJa: string;
  logoIcon: string;
  accentColor?: string;
  isFeatured?: boolean;
}

export const partnerCompanies: CompanyPartner[] = [
  {
    id: 'cozy-corner',
    name: 'Ginza Cozy Corner Co., Ltd.',
    nameJa: '株式会社銀座コージーコーナー',
    shortName: 'Ginza Cozy Corner',
    sector: 'Pengolahan Makanan & Pastry (Food Service)',
    sectorJa: '洋菓子製造・スイーツ加工',
    location: 'Tokyo & Chiba, Jepang',
    locationJa: '東京都・千葉県（埼玉工場）',
    programTag: 'Tokutei Ginou SSW',
    programTagJa: '特定技能（飲食料品製造）',
    description: 'Salah satu jaringan pastry & confectionery terkemuka di Jepang dengan ratusan gerai dan pusat produksi modern berstandar higienitas tinggi.',
    descriptionJa: '首都圏を中心に全国展開する老舗洋菓子メーカー。自社大型工場における特定技能（飲食料品製造）人材の受入れ実績。',
    logoIcon: '菓',
    accentColor: 'rose',
    isFeatured: true,
  },
  {
    id: 'nichii-gakkan',
    name: 'Nichii Gakkan Co., Ltd.',
    nameJa: '株式会社ニチイ学館',
    shortName: 'Nichii Gakkan Group',
    sector: 'Layanan Perawat Lansia & Medis (Kaigo)',
    sectorJa: '医療・介護・ヘルスケア',
    location: 'Tokyo & Multi-Prefecture',
    locationJa: '東京都・全国主要都市施設',
    programTag: 'Tokutei Ginou Kaigo',
    programTagJa: '特定技能（介護）',
    description: 'Penyedia fasilitas lansia dan layanan perawatan kesehatan terbesar di Jepang dengan lingkungan kerja ramah serta bimbingan sertifikasi berkelanjutan.',
    descriptionJa: '日本全国に介護施設を展開するヘルスケア最大手。充実した研修施設と手厚い生活サポート体制で安心の就労環境を提供。',
    logoIcon: '護',
    accentColor: 'amber',
  },
  {
    id: 'yamazaki-baking',
    name: 'Yamazaki Baking Co., Ltd.',
    nameJa: '山崎製パン株式会社',
    shortName: 'Yamazaki Baking',
    sector: 'Manufaktur Roti & Pengolahan Makanan',
    sectorJa: '製パン・食品製造業',
    location: 'Kanto, Chubu & Kansai',
    locationJa: '東京都千代田区・全国拠点工場',
    programTag: 'Tokutei Ginou SSW',
    programTagJa: '特定技能・技能実習',
    description: 'Perusahaan industri roti dan makanan olahan nomor satu di Jepang dengan teknologi otomatisasi modern serta jaminan standar mutu ketat.',
    descriptionJa: '国内シェア首位を誇る製パン・食品加工のリーディングカンパニー。高度な自動化ラインでの製造業務と安全教育体制。',
    logoIcon: '麦',
    accentColor: 'orange',
  },
  {
    id: 'tsukishima-foods',
    name: 'Tsukishima Foods Industry Co., Ltd.',
    nameJa: '月島食品工業株式会社',
    shortName: 'Tsukishima Foods',
    sector: 'Bahan Baku Makanan & Minyak Nabati',
    sectorJa: '食用油脂・食品原料製造',
    location: 'Tokyo & Hyogo',
    locationJa: '東京都江戸川区・兵庫工場',
    programTag: 'Tokutei Ginou SSW',
    programTagJa: '特定技能（飲食料品製造）',
    description: 'Pelopor formulasi margarin, shortening, dan minyak nabati berkualitas tinggi untuk ribuan industri bakery dan confectionery di Jepang.',
    descriptionJa: '製菓・ベーカリー業界を支える油脂原料のパイオニア企業。衛生管理の行き届いた環境で基礎から製造技術を習得。',
    logoIcon: '油',
    accentColor: 'yellow',
  },
  {
    id: 'his-hotel-holdings',
    name: 'H.I.S. Hotel Holdings Co., Ltd.',
    nameJa: 'H.I.S.ホテルホールディングス',
    shortName: 'H.I.S. Hotel Group (Henn na Hotel)',
    sector: 'Perhotelan & Industri Pariwisata (Hospitality)',
    sectorJa: 'ホテル・宿泊・観光サービス',
    location: 'Tokyo, Osaka & Kyoto',
    locationJa: '東京都・大阪府・京都府・金沢',
    programTag: 'Tokutei Ginou & Gijinkoku',
    programTagJa: '特定技能（宿泊）/ 技人国',
    description: 'Jaringan grup hotel inovatif pelopor konsep Henn na Hotel dengan perpaduan teknologi canggih dan keramahan layanan Omotenashi khas Jepang.',
    descriptionJa: '革新的テクノロジーと伝統のおもてなしを融合するホテルチェーン。フロント業務および宿泊運営管理で活躍。',
    logoIcon: '宿',
    accentColor: 'indigo',
  },
  {
    id: 'daiwa-house-group',
    name: 'Daiwa House Industry Co., Ltd.',
    nameJa: '大和ハウス工業グループ',
    shortName: 'Daiwa House Group',
    sector: 'Konstruksi & Manufaktur Bangunan',
    sectorJa: '建築・建設・プレハブ施工',
    location: 'Osaka & Kanto Area',
    locationJa: '大阪府大阪市・関東施工拠点',
    programTag: 'Tokutei Ginou SSW',
    programTagJa: '特定技能（建設）',
    description: 'Salah satu raksasa konstruksi dan perumahan ramah lingkungan terbesar di Jepang dengan standar keselamatan kerja dan perlindungan tenaga kerja terdepan.',
    descriptionJa: '住宅・物流施設建設の最大手総合デベロッパー。徹底した労働安全教育のもと、最新の建設・施工現場で就労。',
    logoIcon: '建',
    accentColor: 'blue',
  },
  {
    id: 'sanwa-techno',
    name: 'Sanwa Techno Engineering Co., Ltd.',
    nameJa: '株式会社サンワテクノ',
    shortName: 'Sanwa Techno Engineering',
    sector: 'Manufaktur Presisi & Teknik Mesin (Engineer)',
    sectorJa: '精密部品加工・エンジニアリング',
    location: 'Aichi & Nagoya',
    locationJa: '愛知県名古屋市・ものづくりエリア',
    programTag: 'Engineer / Gijinkoku',
    programTagJa: '技術・人文知識・国際業務',
    description: 'Mitra industri perakitan komponen presisi dan rekayasa CAD/CAM untuk sektor otomotif dan robotika di pusat manufaktur monozukuri Aichi.',
    descriptionJa: '自動車関連部品および精密金型加工のスペシャリスト。理系大卒者を対象としたエンジニアビザ（技人国）での採用連携。',
    logoIcon: '技',
    accentColor: 'teal',
  },
];
