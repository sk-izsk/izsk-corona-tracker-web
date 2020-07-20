import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';

export interface CountriesProps {}

const Countries: React.FC<CountriesProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryConfirmedList: CountryResponse[] = useSelector<any, CountryResponse[]>(
    (state: RootState) => state.countryConfirmedList,
  );

  useEffect(() => {
    if (countryConfirmedList.length === 0) {
      dispatch(Actions.getCountryConfirmedList());
    }
  }, [dispatch, countryConfirmedList]);

  return (
    <>
      <CountryListContainer countryList={countryConfirmedList} type='confirmed' />
    </>
  );
};

export default Countries;
