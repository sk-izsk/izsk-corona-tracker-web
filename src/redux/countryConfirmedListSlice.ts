import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryResponse } from '../api/response';

let initialState: CountryResponse[] = [];

const countryConfirmedListSlice = createSlice({
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
