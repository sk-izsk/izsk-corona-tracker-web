import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryConfirmedListSlice: Slice<
  CountryResponse[],
  {
    addCountryConfirmedListData: (
      state: CountryResponse[],
      action: PayloadAction<CountryResponse[]>,
    ) => CountryResponse[];
  },
  'countryConfirmedList'
> = createSlice({
  name: 'countryConfirmedList',
  initialState,
  reducers: {
    addCountryConfirmedListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addCountryConfirmedListData } = countryConfirmedListSlice.actions;

export default countryConfirmedListSlice.reducer;
