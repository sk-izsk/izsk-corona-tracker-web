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
