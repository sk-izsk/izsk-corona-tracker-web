import { AxiosResponse } from 'axios';
import { differenceInCalendarDays } from 'date-fns';
import axios from './axios';
import { ContinentResponse, CountryResponse, ProvinceResponse } from './response';

const fetchContinentInformation: () => Promise<{
  status: number;
  data: ContinentResponse[];
}> = async () => {
  const response: AxiosResponse<ContinentResponse[]> = await axios.get<any, AxiosResponse<ContinentResponse[]>>(
    '/continents',
  );
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

const fetchCountryList: (
  sort?:
    | 'cases'
    | 'todayCases'
    | 'deaths'
    | 'todayDeaths'
    | 'recovered'
    | 'active'
    | 'critical'
    | 'casesPerOneMillion'
    | 'deathsPerOneMillion'
    | undefined,
) => Promise<{
  status: number;
  data: CountryResponse[];
}> = async (sort?: Sort) => {
  const response: AxiosResponse<CountryResponse[]> = sort
    ? await axios.get<any, AxiosResponse<CountryResponse[]>>(`/countries?sort=${sort}`)
    : await axios.get('/countries');
  return {
    status: response.status,
    data: response.data,
  };
};

const fetchProvinceList: () => Promise<{
  status: number;
  data: ProvinceResponse[];
}> = async () => {
  const response: AxiosResponse<ProvinceResponse[]> = await axios.get<any, AxiosResponse<ProvinceResponse[]>>(
    '/historical?lastdays=1',
  );
  return {
    status: response.status,
    data: response.data,
  };
};

const fetchChartDataList = async () => {
  const response = await axios.get(
    `/historical/all?lastdays=${differenceInCalendarDays(new Date(), new Date(2020, 1, 22))}`,
  );
  return {
    status: response.status,
    data: response.data,
  };
};

export { fetchContinentInformation, fetchCountryList, fetchProvinceList, fetchChartDataList };
