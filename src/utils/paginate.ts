import { FormattedArray } from './getFormatted';
const paginate: (countryList: FormattedArray[], pageSize: number, pageNumber: number) => FormattedArray[] = (
  countryList: FormattedArray[],
  pageSize: number,
  pageNumber: number,
) => {
  return countryList.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export { paginate };
