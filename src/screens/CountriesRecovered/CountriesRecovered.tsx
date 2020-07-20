import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';

export interface CountriesRecoveredProps {}

const CountriesRecovered: React.FC<CountriesRecoveredProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryRecoveredList: CountryResponse[] = useSelector<any, CountryResponse[]>(
    (state: RootState) => state.countryRecoveredList,
  );

  useEffect(() => {
    if (countryRecoveredList.length === 0) {
      dispatch(Actions.getCountryRecoveredList());
    }
  }, [dispatch, countryRecoveredList]);

  return (
    <>
      <CountryListContainer countryList={countryRecoveredList} type='recovered' />
    </>
  );
};

export default CountriesRecovered;
