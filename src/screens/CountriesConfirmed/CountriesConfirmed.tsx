import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';
import { getFormattedCountry } from '../../utils';
import { FormattedArray } from '../../utils/getFormatted';

export interface CountriesConfirmedProps {}

const CountriesConfirmed: React.FC<CountriesConfirmedProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryConfirmedList: CountryResponse[] = useSelector<RootState, CountryResponse[]>(
    (state: RootState) => state.countryConfirmedList,
  );
  const formattedCountryList: FormattedArray[] = getFormattedCountry(countryConfirmedList);

  useEffect(() => {
    if (countryConfirmedList.length === 0) {
      dispatch(Actions.getCountryConfirmedList());
    }
  }, [dispatch, countryConfirmedList]);

  return (
    <>
      <CountryListContainer countryList={formattedCountryList} type='confirmed' />
    </>
  );
};

export default CountriesConfirmed;
