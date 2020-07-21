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
  const countryList: CountryResponse[] = useSelector<any, CountryResponse[]>((state: RootState) => state.countryList);

  useEffect(() => {
    if (countryList.length === 0) {
      dispatch(Actions.getCountryList());
    }
  }, [dispatch, countryList]);

  return (
    <>
      <CountryListContainer countryList={countryList} type='confirmed' />
    </>
  );
};

export default Countries;
