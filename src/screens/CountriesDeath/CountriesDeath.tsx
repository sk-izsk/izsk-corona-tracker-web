import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';

export interface CountriesDeathsProps {}

const CountriesDeaths: React.FC<CountriesDeathsProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryDeathsList: CountryResponse[] = useSelector<any, CountryResponse[]>(
    (state: RootState) => state.countryDeathsList,
  );

  useEffect(() => {
    if (countryDeathsList.length === 0) {
      dispatch(Actions.getCountryDeathsList());
    }
  }, [dispatch, countryDeathsList]);

  return (
    <>
      <CountryListContainer countryList={countryDeathsList} type='death' />
    </>
  );
};

export default CountriesDeaths;
