import { AxiosResponse } from 'axios';
import axios, { axios1 } from './axios';
import { CountryResponse } from './response';

const fetchCountriesInformation: (
  informationType: string,
) => Promise<{
  status: number;
  data: CountryResponse[];
}> = async (informationType: string) => {
  const response: AxiosResponse<CountryResponse[]> = await axios1.get<any, AxiosResponse<CountryResponse[]>>(
    `/${informationType}`,
  );
  return {
    status: response.status,
    data: response.data,
  };
};

const fetchContinentInformation = async () => {
  const response = await axios.get('/continents');
  return {
    status: response.status,
    data: response.data,
  };
};

export type Sort =
  | 'cases'
  | 'todayCases'
  | 'deaths'
  | 'todayDeaths'
  | 'recovered'
  | 'active'
  | 'critical'
  | 'casesPerOneMillion'
  | 'deathsPerOneMillion';

const fetchCountryList = async (sort?: Sort) => {
  const response = sort ? await axios.get(`/countries?sort=${sort}`) : await axios.get('/countries');
  return {
    status: response.status,
    data: response.data,
  };
};

export { fetchCountriesInformation, fetchContinentInformation, fetchCountryList };
