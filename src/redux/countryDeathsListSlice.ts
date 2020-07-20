import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryDeathsListSlice = createSlice({
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
