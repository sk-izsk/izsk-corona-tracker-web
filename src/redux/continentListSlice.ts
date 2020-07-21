import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContinentResponse } from '../api/response';

let initialState: ContinentResponse[] = [];

const continentListSlice = createSlice({
  name: 'continentList',
  initialState,
  reducers: {
    addContinentListData: (state: ContinentResponse[], action: PayloadAction<ContinentResponse[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addContinentListData } = continentListSlice.actions;

export default continentListSlice.reducer;
