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
            provinceState: 'New York',
            countryRegion: 'US',
            lastUpdate: 1595264101000,
            lat: 40.7672726,
            long: -73.97152637,
            confirmed: 221703,
            recovered: 0,
            deaths: 23400,
            active: 198303,
            admin2: 'New York City',
            fips: '36061',
            combinedKey: 'New York City, New York, US',
            incidentRate: 2659.32429607127,
            peopleTested: null,
            peopleHospitalized: null,
            uid: 84036061,
            iso3: 'USA',
            iso2: 'US',
          },
        ] as Payload['countryConfirmedList'],
      }),
    ).toEqual([
      {
        provinceState: 'New York',
        countryRegion: 'US',
        lastUpdate: 1595264101000,
        lat: 40.7672726,
        long: -73.97152637,
        confirmed: 221703,
        recovered: 0,
        deaths: 23400,
        active: 198303,
        admin2: 'New York City',
        fips: '36061',
        combinedKey: 'New York City, New York, US',
        incidentRate: 2659.32429607127,
        peopleTested: null,
        peopleHospitalized: null,
        uid: 84036061,
        iso3: 'USA',
        iso2: 'US',
      },
    ]);
  });
});
