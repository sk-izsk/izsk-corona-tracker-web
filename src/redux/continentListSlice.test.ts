import { ContinentResponse } from '../api/response';
import continentListSlice, { addContinentListData } from './continentListSlice';

const initialState: ContinentResponse[] = [];

interface Payload {
  continentList: ContinentResponse[];
}

describe('countryNewCasesListSlice reducer', () => {
  it('should handle initial state', () => {
    expect(continentListSlice(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle applicantComments', () => {
    expect(
      continentListSlice(initialState, {
        type: addContinentListData.type,
        payload: [
          {
            updated: 1595329453596,
            cases: 4643484,
            todayCases: 6392,
            deaths: 197625,
            todayDeaths: 379,
            recovered: 2275372,
            todayRecovered: 6020,
            active: 2170487,
            critical: 23663,
            casesPerOneMillion: 7878.99,
            deathsPerOneMillion: 335.33,
            tests: 54850339,
            testsPerOneMillion: 93069.19,
            population: 589350114,
            continent: 'North America',
            activePerOneMillion: 3682.85,
            recoveredPerOneMillion: 3860.82,
            criticalPerOneMillion: 40.15,
            continentInfo: {
              lat: 31.6768272,
              long: -146.4707474,
            },
            countries: ['Anguilla'],
          },
        ] as Payload['continentList'],
      }),
    ).toEqual([
      {
        updated: 1595329453596,
        cases: 4643484,
        todayCases: 6392,
        deaths: 197625,
        todayDeaths: 379,
        recovered: 2275372,
        todayRecovered: 6020,
        active: 2170487,
        critical: 23663,
        casesPerOneMillion: 7878.99,
        deathsPerOneMillion: 335.33,
        tests: 54850339,
        testsPerOneMillion: 93069.19,
        population: 589350114,
        continent: 'North America',
        activePerOneMillion: 3682.85,
        recoveredPerOneMillion: 3860.82,
        criticalPerOneMillion: 40.15,
        continentInfo: {
          lat: 31.6768272,
          long: -146.4707474,
        },
        countries: ['Anguilla'],
      },
    ]);
  });
});
