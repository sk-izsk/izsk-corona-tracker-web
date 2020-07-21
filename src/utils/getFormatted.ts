import { ContinentResponse, CountryResponse } from '../api/response';

export interface FormattedArray {
  name: string;
  valueForConfirmed: number;
  valueForRecovered: number;
  valueForDeaths: number;
}

const getFormattedCountry: (countryList: CountryResponse[]) => FormattedArray[] = (countryList: CountryResponse[]) => {
  let formattedArray: FormattedArray[] = [];
  // eslint-disable-next-line
  countryList.map((country: CountryResponse) => {
    formattedArray.push({
      name: country.country,
      valueForConfirmed: country.cases,
      valueForRecovered: country.recovered,
      valueForDeaths: country.deaths,
    });
  });
  return formattedArray;
};

const getFormattedContinent: (countryList: ContinentResponse[]) => FormattedArray[] = (
  countryList: ContinentResponse[],
) => {
  let formattedArray: FormattedArray[] = [];
  // eslint-disable-next-line
  countryList.map((country: ContinentResponse) => {
    formattedArray.push({
      name: country.continent,
      valueForConfirmed: country.cases,
      valueForRecovered: country.recovered,
      valueForDeaths: country.deaths,
    });
  });
  return formattedArray;
};

export { getFormattedCountry, getFormattedContinent };
