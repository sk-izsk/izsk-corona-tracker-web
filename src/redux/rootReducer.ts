import { combineReducers } from '@reduxjs/toolkit';
import continentListSlice from './continentListSlice';
import countryConfirmedListSlice from './countryConfirmedListSlice';
import countryDeathsListSlice from './countryDeathsListSlice';
import countryListSlice from './countryListSlice';
import countryRecoveredListSlice from './countryRecoveredListSlice';
import homeDataSlice from './homeDataSlice';

const rootReducer = combineReducers({
  homeData: homeDataSlice,
  countryConfirmedList: countryConfirmedListSlice,
  countryRecoveredList: countryRecoveredListSlice,
  countryDeathsList: countryDeathsListSlice,
  continents: continentListSlice,
  countryList: countryListSlice,
});

export { rootReducer };
