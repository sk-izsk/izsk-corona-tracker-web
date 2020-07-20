import { AxiosResponse } from 'axios';
import axios from './axios';
import { CountryResponse } from './response';

const fetchCountriesInformation: (
  informationType: string,
) => Promise<{
  status: number;
  data: CountryResponse[];
}> = async (informationType: string) => {
  const response: AxiosResponse<CountryResponse[]> = await axios.get<any, AxiosResponse<CountryResponse[]>>(
    `/${informationType}`,
  );
  return {
    status: response.status,
    data: response.data,
  };
};

export { fetchCountriesInformation };
