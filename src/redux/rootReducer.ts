import { combineReducers } from '@reduxjs/toolkit';
import chartSlice from './chartSlice';
import continentListSlice from './continentListSlice';
import countryConfirmedListSlice from './countryConfirmedListSlice';
import countryDeathsListSlice from './countryDeathsListSlice';
import countryListSlice from './countryListSlice';
import countryNewCasesListSlice from './countryNewCasesListSlice';
import countryRecoveredListSlice from './countryRecoveredListSlice';
import homeDataSlice from './homeDataSlice';
import provinceListSlice from './provinceListSlice';

const rootReducer = combineReducers({
  homeData: homeDataSlice,
  countryConfirmedList: countryConfirmedListSlice,
  countryRecoveredList: countryRecoveredListSlice,
  countryDeathsList: countryDeathsListSlice,
  countryNewCasesList: countryNewCasesListSlice,
  continents: continentListSlice,
  countryList: countryListSlice,
  provinceList: provinceListSlice,
  chart: chartSlice,
});

export { rootReducer };
