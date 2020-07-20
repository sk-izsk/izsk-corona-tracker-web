import { CountryResponse } from '../api/response';
const paginate: (countryList: CountryResponse[], pageSize: number, pageNumber: number) => CountryResponse[] = (
  countryList: CountryResponse[],
  pageSize: number,
  pageNumber: number,
) => {
  return countryList.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export { paginate };
