import { AnyAction, CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';
import { ContinentResponse, CountryResponse, ProvinceResponse } from '../api/response';
import continentListSlice from './continentListSlice';
import countryConfirmedListSlice from './countryConfirmedListSlice';
import countryDeathsListSlice from './countryDeathsListSlice';
import countryListSlice from './countryListSlice';
import countryNewCasesListSlice from './countryNewCasesListSlice';
import countryRecoveredListSlice from './countryRecoveredListSlice';
import homeDataSlice, { InitialState } from './homeDataSlice';
import provinceListSlice from './provinceListSlice';

const rootReducer: Reducer<
  CombinedState<{
    homeData: InitialState;
    countryConfirmedList: CountryResponse[];
    countryRecoveredList: CountryResponse[];
    countryDeathsList: CountryResponse[];
    countryNewCasesList: CountryResponse[];
    continents: ContinentResponse[];
    countryList: CountryResponse[];
    provinceList: ProvinceResponse[];
  }>,
  AnyAction
> = combineReducers({
  homeData: homeDataSlice,
  countryConfirmedList: countryConfirmedListSlice,
  countryRecoveredList: countryRecoveredListSlice,
  countryDeathsList: countryDeathsListSlice,
  countryNewCasesList: countryNewCasesListSlice,
  continents: continentListSlice,
  countryList: countryListSlice,
  provinceList: provinceListSlice,
});

export { rootReducer };
