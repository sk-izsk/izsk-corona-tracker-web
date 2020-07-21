import { ContinentResponse, CountryResponse } from '../api/response';

export interface FormattedArray {
  name: string;
  valueForConfirmed: number;
  valueForRecovered: number;
  valueForDeaths: number;
  avatarLink?: string;
  valueForNewCase?: number;
  type?: string;
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
      avatarLink: country.countryInfo.flag,
      valueForNewCase: country.todayCases,
      type: 'country',
    });
  });
  return formattedArray;
};

const getFormattedContinent: (continentList: ContinentResponse[]) => FormattedArray[] = (
  continentList: ContinentResponse[],
) => {
  let formattedArray: FormattedArray[] = [];
  // eslint-disable-next-line
  continentList.map((continent: ContinentResponse) => {
    formattedArray.push({
      name: continent.continent,
      valueForConfirmed: continent.cases,
      valueForRecovered: continent.recovered,
      valueForDeaths: continent.deaths,
      valueForNewCase: continent.todayCases,
      type: 'continent',
    });
  });
  return formattedArray;
};

export { getFormattedCountry, getFormattedContinent };
