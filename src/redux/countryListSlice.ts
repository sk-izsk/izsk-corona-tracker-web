import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryListSlice = createSlice({
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
