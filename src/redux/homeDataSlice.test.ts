import homeData, { addHomeData, InitialState as HomeInitialStateData } from './homeDataSlice';

const initialState: HomeInitialStateData = {};

interface Payload {
  homeData: HomeInitialStateData;
}

describe('countryDeathsList reducer', () => {
  it('should handle initial state', () => {
    expect(homeData(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle applicantComments', () => {
    expect(
      homeData(initialState, {
        type: addHomeData.type,
        payload: {
          confirmed: 123,
          recovered: 123,
          deaths: 123,
          lastUpdate: 'mock last update',
        } as Payload['homeData'],
      }),
    ).toEqual({
      confirmed: 123,
      recovered: 123,
      deaths: 123,
      lastUpdate: 'mock last update',
    });
  });
});
