import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';
import { getFormattedCountry } from '../../utils';
import { FormattedArray } from '../../utils/getFormatted';

export interface CountriesRecoveredProps {}

const CountriesRecovered: React.FC<CountriesRecoveredProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryRecoveredList: CountryResponse[] = useSelector<RootState, CountryResponse[]>(
    (state: RootState) => state.countryRecoveredList,
  );

  const formattedCountryList: FormattedArray[] = getFormattedCountry(countryRecoveredList);

  useEffect(() => {
    if (countryRecoveredList.length === 0) {
      dispatch(Actions.getCountryRecoveredList());
    }
  }, [dispatch, countryRecoveredList]);

  return (
    <>
      <CountryListContainer countryList={formattedCountryList} type='recovered' />
    </>
  );
};

export default CountriesRecovered;
