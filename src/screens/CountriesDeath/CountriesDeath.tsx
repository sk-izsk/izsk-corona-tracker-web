import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';
import { getFormattedCountry } from '../../utils';
import { FormattedArray } from '../../utils/getFormatted';

export interface CountriesDeathsProps {}

const CountriesDeaths: React.FC<CountriesDeathsProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryDeathsList: CountryResponse[] = useSelector<RootState, CountryResponse[]>(
    (state: RootState) => state.countryDeathsList,
  );
  const formattedCountryList: FormattedArray[] = getFormattedCountry(countryDeathsList);

  useEffect(() => {
    if (countryDeathsList.length === 0) {
      dispatch(Actions.getCountryDeathsList());
    }
  }, [dispatch, countryDeathsList]);

  return (
    <>
      <CountryListContainer countryList={formattedCountryList} type='death' />
    </>
  );
};

export default CountriesDeaths;
