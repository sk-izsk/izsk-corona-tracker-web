import countryConfirmedListSlice, { addCountryConfirmedListData } from './countryConfirmedListSlice';
import countryDeathsListSlice, { addCountryDeathsListData } from './countryDeathsListSlice';
import countryRecoveredListSlice, { addCountryRecoveredListData } from './countryRecoveredListSlice';
import homeDataSlice, { addHomeData } from './homeDataSlice';

export { rootReducer } from './rootReducer';
export { store } from './store';
export { Actions } from './thunk';
export {
  homeDataSlice,
  addHomeData,
  countryConfirmedListSlice,
  addCountryConfirmedListData,
  countryRecoveredListSlice,
  addCountryRecoveredListData,
  countryDeathsListSlice,
  addCountryDeathsListData,
};
