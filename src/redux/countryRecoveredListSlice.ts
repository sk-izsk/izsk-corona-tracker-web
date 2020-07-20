import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryRecoveredListSlice = createSlice({
  name: 'countryRecoveredList',
  initialState,
  reducers: {
    addCountryRecoveredListData: (state: CountryResponse[], action: PayloadAction<CountryResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addCountryRecoveredListData } = countryRecoveredListSlice.actions;

export default countryRecoveredListSlice.reducer;
