import { combineReducers } from '@reduxjs/toolkit';
import countryConfirmedListSlice from './countryConfirmedListSlice';
import countryDeathsListSlice from './countryDeathsListSlice';
import countryRecoveredListSlice from './countryRecoveredListSlice';
import homeDataSlice from './homeDataSlice';

const rootReducer = combineReducers({
  homeData: homeDataSlice,
  countryConfirmedList: countryConfirmedListSlice,
  countryRecoveredList: countryRecoveredListSlice,
  countryDeathsList: countryDeathsListSlice,
});

export { rootReducer };
