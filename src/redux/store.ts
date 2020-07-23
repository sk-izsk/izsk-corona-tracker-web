import { AnyAction, CombinedState, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { ContinentResponse, CountryResponse, ProvinceResponse } from '../api/response';
import { InitialState } from './homeDataSlice';
import { rootReducer } from './rootReducer';

const store: EnhancedStore<
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
  AnyAction,
  any
> = configureStore({
  reducer: rootReducer,
  devTools:
    process.env.NODE_ENV === 'development'
      ? {
          name: 'covidTracker',
        }
      : false,
});

export type RootState = ReturnType<typeof rootReducer>;
export { store };
