import { ProvinceResponse } from '../api/response';
import provinceListSlice, { addProvinceListData } from './provinceListSlice';

const initialState: ProvinceResponse[] = [];

interface Payload {
  provinceList: ProvinceResponse[];
}

describe('countryNewCasesListSlice reducer', () => {
  it('should handle initial state', () => {
    expect(provinceListSlice(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle applicantComments', () => {
    expect(
      provinceListSlice(initialState, {
        type: addProvinceListData.type,
        payload: [
          {
            country: 'Afghanistan',
            province: null,
            timeline: {
              cases: 123,
              deaths: 123,
              recovered: 123,
            },
          },
        ] as Payload['provinceList'],
      }),
    ).toEqual([
      {
        country: 'Afghanistan',
        province: null,
        timeline: {
          cases: 123,
          deaths: 123,
          recovered: 123,
        },
      },
    ]);
  });
});
