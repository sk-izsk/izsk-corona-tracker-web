import { combineReducers } from '@reduxjs/toolkit';
import homeDataSlice from './homeDataSlice';

const rootReducer = combineReducers({
  homeData: homeDataSlice,
});

export { rootReducer };
