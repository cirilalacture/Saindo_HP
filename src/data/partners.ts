export interface CompanyPartner {
  id: string;
  name: string;
  nameJa: string;
  shortName: string;
  logo: string;
}

export const partnerCompanies: CompanyPartner[] = [
  {
    id: 'cozy-corner',
    name: 'Ginza Cozy Corner Co., Ltd.',
    nameJa: '株式会社銀座コージーコーナー',
    shortName: 'Ginza Cozy Corner',
    logo: '/assets/partners/cozy-corner.svg',
  },
  {
    id: 'nichii-gakkan',
    name: 'Nichii Gakkan Co., Ltd.',
    nameJa: '株式会社ニチイ学館',
    shortName: 'Nichii Gakkan Group',
    logo: '/assets/partners/nichii-gakkan.svg',
  },
  {
    id: 'yamazaki-baking',
    name: 'Yamazaki Baking Co., Ltd.',
    nameJa: '山崎製パン株式会社',
    shortName: 'Yamazaki Baking',
    logo: '/assets/partners/yamazaki-baking.svg',
  },
  {
    id: 'tsukishima-foods',
    name: 'Tsukishima Foods Industry Co., Ltd.',
    nameJa: '月島食品工業株式会社',
    shortName: 'Tsukishima Foods',
    logo: '/assets/partners/tsukishima-foods.svg',
  },
  {
    id: 'his-hotel-holdings',
    name: 'H.I.S. Hotel Holdings Co., Ltd.',
    nameJa: 'H.I.S.ホテルホールディングス',
    shortName: 'H.I.S. Hotel Group',
    logo: '/assets/partners/his-hotel.svg',
  },
  {
    id: 'daiwa-house-group',
    name: 'Daiwa House Industry Co., Ltd.',
    nameJa: '大和ハウス工業グループ',
    shortName: 'Daiwa House Group',
    logo: '/assets/partners/daiwa-house.svg',
  },
  {
    id: 'sanwa-techno',
    name: 'Sanwa Techno Engineering Co., Ltd.',
    nameJa: '株式会社サンワテクノ',
    shortName: 'Sanwa Techno Engineering',
    logo: '/assets/partners/sanwa-techno.svg',
  },
];
