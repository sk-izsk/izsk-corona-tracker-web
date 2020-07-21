import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProvinceResponse } from '../api/response';

let initialState: ProvinceResponse[] = [];

const provinceListSlice = createSlice({
  name: 'provinceList',
  initialState,
  reducers: {
    addProvinceListData: (state: ProvinceResponse[], action: PayloadAction<ProvinceResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addProvinceListData } = provinceListSlice.actions;

export default provinceListSlice.reducer;
