export interface CompanyPartner {
  id: string;
  name: string;
  nameJa: string;
  shortName: string;
  website: string;
  logo: string;
}

export const partnerCompanies: CompanyPartner[] = [
  {
    id: 'cozy-corner',
    name: 'Ginza Cozy Corner Co., Ltd.',
    nameJa: '株式会社銀座コージーコーナー',
    shortName: 'Ginza Cozy Corner',
    website: 'https://www.cozycorner.co.jp/',
    logo: '/assets/partners/cozy-corner.svg',
  },
  {
    id: 'foods-and-foods',
    name: 'Foods and Foods Co., Ltd.',
    nameJa: 'フーズ アンド フーズ 株式会社',
    shortName: 'Foods and Foods (af-japan.jp)',
    website: 'https://www.af-japan.jp/',
    logo: '/assets/partners/foods-and-foods.svg',
  },
  {
    id: 'tamago-and-farms',
    name: 'Tamago & Company Inc. / Tamago and Farmers',
    nameJa: 'たまご＆カンパニー株式会社 (T&C)',
    shortName: 'Tamago and Farms (tandc.inc)',
    website: 'https://www.tandc.inc/',
    logo: '/assets/partners/tamago-and-company.svg',
  },
  {
    id: 'shiaikai-hokkaido',
    name: 'Social Welfare Corporation Hokkaido Shiaikai',
    nameJa: '社会福祉法人 北海道仕愛会',
    shortName: 'Shiaikai Hokkaido (shiaikai.jp)',
    website: 'https://shiaikai.jp/',
    logo: '/assets/partners/shiaikai.svg',
  },
];
