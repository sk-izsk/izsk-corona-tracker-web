import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';
import { getFormattedCountry } from '../../utils';

export interface CountriesProps {}

const Countries: React.FC<CountriesProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryList: CountryResponse[] = useSelector<any, CountryResponse[]>((state: RootState) => state.countryList);
  const formattedCountryList = getFormattedCountry(countryList);
  useEffect(() => {
    if (countryList.length === 0) {
      dispatch(Actions.getCountryList());
    }
  }, [dispatch, countryList]);

  return (
    <>
      <CountryListContainer countryList={formattedCountryList} type='alphabetically' />
    </>
  );
};

export default Countries;
