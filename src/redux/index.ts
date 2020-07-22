import continentListSlice, { addContinentListData } from './continentListSlice';
import countryConfirmedListSlice, { addCountryConfirmedListData } from './countryConfirmedListSlice';
import countryDeathsListSlice, { addCountryDeathsListData } from './countryDeathsListSlice';
import countryListSlice, { addCountryListData } from './countryListSlice';
import countryNewCasesListSlice, { addCountryNewCasesListData } from './countryNewCasesListSlice';
import countryRecoveredListSlice, { addCountryRecoveredListData } from './countryRecoveredListSlice';
import homeDataSlice, { addHomeData } from './homeDataSlice';
import provinceListSlice, { addProvinceListData } from './provinceListSlice';

export { rootReducer } from './rootReducer';
export { store } from './store';
export { Actions } from './thunk';
export {
  homeDataSlice,
  addHomeData,
  continentListSlice,
  countryListSlice,
  countryNewCasesListSlice,
  provinceListSlice,
  countryConfirmedListSlice,
  addCountryConfirmedListData,
  countryRecoveredListSlice,
  addCountryRecoveredListData,
  countryDeathsListSlice,
  addCountryDeathsListData,
  addContinentListData,
  addCountryListData,
  addCountryNewCasesListData,
  addProvinceListData,
};
