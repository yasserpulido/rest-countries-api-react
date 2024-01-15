export type Country = {
  borders: string[];
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};

export type CapitalInfo = {
  latlng: number[];
};

export type Car = {
  signs: string[];
  side: string;
};

export type CoatOfArms = {
  png: string;
  svg: string;
};

export type Currencies = {
  [key: string]: Aud;
};

export type Aud = {
  name: string;
  symbol: string;
};

export type Demonyms = {
  eng: Eng;
};

export type Eng = {
  f: string;
  m: string;
};

export type Idd = {
  root: string;
  suffixes: string[];
};

export type Languages = {
  [key: string]: string;
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

export type NativeName = {
  [key: string]: Translation;
};

export type Translation = {
  official: string;
  common: string;
};

export type PostalCode = {
  format: string;
  regex: string;
};
