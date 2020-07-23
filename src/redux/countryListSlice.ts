import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryListSlice: Slice<
  CountryResponse[],
  {
    addCountryListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => CountryResponse[];
  },
  'countryList'
> = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    addCountryListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addCountryListData } = countryListSlice.actions;

export default countryListSlice.reducer;
