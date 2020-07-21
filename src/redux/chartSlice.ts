import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Timeline } from '../api/response';

let initialState: Timeline = {};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    addChartData: (state: Timeline, action: PayloadAction<Timeline>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addChartData } = chartSlice.actions;

export default chartSlice.reducer;
