import { CountryResponse } from '../api/response';
import countryConfirmedList, { addCountryConfirmedListData } from './countryConfirmedListSlice';

const initialState: CountryResponse[] = [];

interface Payload {
  countryConfirmedList: CountryResponse[];
}

describe('countryConfirmedList reducer', () => {
  it('should handle initial state', () => {
    expect(countryConfirmedList(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle applicantComments', () => {
    expect(
      countryConfirmedList(initialState, {
        type: addCountryConfirmedListData.type,
        payload: [
          {
            updated: 1595329452610,
            country: 'Afghanistan',
            countryInfo: {
              _id: 4,
              iso2: 'AF',
              iso3: 'AFG',
              lat: 33,
              long: 65,
              flag: 'https://disease.sh/assets/img/flags/af.png',
            },
            cases: 35615,
            todayCases: 89,
            deaths: 1186,
            todayDeaths: 1,
            recovered: 23741,
            todayRecovered: 0,
            active: 10688,
            critical: 31,
            casesPerOneMillion: 914,
            deathsPerOneMillion: 30,
            tests: 84202,
            testsPerOneMillion: 2161,
            population: 38968626,
            continent: 'Asia',
            oneCasePerPeople: 1094,
            oneDeathPerPeople: 32857,
            oneTestPerPeople: 463,
            activePerOneMillion: 274.27,
            recoveredPerOneMillion: 609.23,
            criticalPerOneMillion: 0.8,
          },
        ] as Payload['countryConfirmedList'],
      }),
    ).toEqual([
      {
        updated: 1595329452610,
        country: 'Afghanistan',
        countryInfo: {
          _id: 4,
          iso2: 'AF',
          iso3: 'AFG',
          lat: 33,
          long: 65,
          flag: 'https://disease.sh/assets/img/flags/af.png',
        },
        cases: 35615,
        todayCases: 89,
        deaths: 1186,
        todayDeaths: 1,
        recovered: 23741,
        todayRecovered: 0,
        active: 10688,
        critical: 31,
        casesPerOneMillion: 914,
        deathsPerOneMillion: 30,
        tests: 84202,
        testsPerOneMillion: 2161,
        population: 38968626,
        continent: 'Asia',
        oneCasePerPeople: 1094,
        oneDeathPerPeople: 32857,
        oneTestPerPeople: 463,
        activePerOneMillion: 274.27,
        recoveredPerOneMillion: 609.23,
        criticalPerOneMillion: 0.8,
      },
    ]);
  });
});
