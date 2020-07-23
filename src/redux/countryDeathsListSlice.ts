import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryDeathsListSlice: Slice<
  CountryResponse[],
  {
    addCountryDeathsListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => CountryResponse[];
  },
  'countryDeathsList'
> = createSlice({
  name: 'countryDeathsList',
  initialState,
  reducers: {
    addCountryDeathsListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addCountryDeathsListData } = countryDeathsListSlice.actions;

export default countryDeathsListSlice.reducer;
