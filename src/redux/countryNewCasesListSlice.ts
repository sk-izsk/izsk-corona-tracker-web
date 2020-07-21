import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryNewCasesListSlice = createSlice({
  name: 'countryNewCasesList',
  initialState,
  reducers: {
    addCountryNewCasesListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addCountryNewCasesListData } = countryNewCasesListSlice.actions;

export default countryNewCasesListSlice.reducer;
