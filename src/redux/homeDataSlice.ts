import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface InitialState {
  confirmed?: number;
  recovered?: number;
  deaths?: number;
  lastUpdate?: string;
}

let initialState: InitialState = {};

const homeDataSlice: Slice<
  InitialState,
  {
    addHomeData: (state: InitialState, action: PayloadAction<InitialState>) => InitialState;
  },
  'homeData'
> = createSlice({
  name: 'homeData',
  initialState,
  reducers: {
    addHomeData: (state: InitialState, action: PayloadAction<InitialState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addHomeData } = homeDataSlice.actions;

export default homeDataSlice.reducer;
