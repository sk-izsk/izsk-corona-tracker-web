export interface Information {
  value: number;
  detail: string;
}

export interface Pattern {
  pattern: string;
  example: string;
}
export interface HomeDataResponse {
  confirmed: Information;
  recovered: Information;
  deaths: Information;
  dailySummary: string;
  dailyTimeSeries: Pattern;
  image: string;
  source: string;
  countries: string;
  countryDetail: Pattern;
  lastUpdate: string;
}

export interface CountryResponse {
  provinceState: string;
  countryRegion: string;
  lastUpdate: number;
  lat: number;
  long: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
  admin2?: any;
  fips?: any;
  combinedKey: string;
  incidentRate: number;
  peopleTested?: number | null;
  peopleHospitalized?: number | null;
  uid: number;
  iso3: string;
  iso2: string;
}

export interface WorldWideResponse {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}
