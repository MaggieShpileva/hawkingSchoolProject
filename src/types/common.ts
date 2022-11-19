export type Menu = {
  title: string;
  categories: Category[];
}[];

export type Category = {
  name: string;
  count: number;
};

export type FlatData = {
  id: number;
  price: number;
  foto?: string;
  countPeople: string;
  countFlat: number;
  area: number;
  adress: string;
  metro: string;
  district: string;
  description: string;
  contacts?: number;
};
export type Flats = FlatData[];

export type Tariff = {
  img?: string;
  title: string;
  text: string;
  sur_text?: string;
  btn_text: string;
};
export type Tariffs = Tariff[];
