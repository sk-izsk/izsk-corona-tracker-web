import { ContinentResponse, CountryResponse, ProvinceResponse } from '../api/response';

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

const getFormattedProvince: (provinceList: ProvinceResponse[]) => FormattedArray[] = (
  provinceList: ProvinceResponse[],
) => {
  let formattedArray: FormattedArray[] = [];
  if (provinceList.length > 1) {
    // eslint-disable-next-line
    provinceList.map((province: ProvinceResponse) => {
      formattedArray.push({
        name: province.province as string,
        valueForConfirmed: Object.values(province.timeline.cases)[0] as number,
        valueForRecovered: Object.values(province.timeline.recovered)[0] as number,
        valueForDeaths: Object.values(province.timeline.deaths)[0] as number,
        type: 'province',
      });
    });
  }

  return formattedArray;
};

export { getFormattedCountry, getFormattedContinent, getFormattedProvince };
