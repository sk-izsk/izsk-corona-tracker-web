import { combineReducers } from '@reduxjs/toolkit';
import continentListSlice from './continentListSlice';
import countryConfirmedListSlice from './countryConfirmedListSlice';
import countryDeathsListSlice from './countryDeathsListSlice';
import countryListSlice from './countryListSlice';
import countryNewCasesListSlice from './countryNewCasesListSlice';
import countryRecoveredListSlice from './countryRecoveredListSlice';
import homeDataSlice from './homeDataSlice';

const rootReducer = combineReducers({
  homeData: homeDataSlice,
  countryConfirmedList: countryConfirmedListSlice,
  countryRecoveredList: countryRecoveredListSlice,
  countryDeathsList: countryDeathsListSlice,
  countryNewCasesList: countryNewCasesListSlice,
  continents: continentListSlice,
  countryList: countryListSlice,
});

export { rootReducer };
