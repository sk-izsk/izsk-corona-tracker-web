import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryResponse } from '../../api/response';
import { CountryListContainer } from '../../components';
import { RootState } from '../../redux/store';
import { Actions } from '../../redux/thunk';
import { getFormattedCountry } from '../../utils';
import { FormattedArray } from '../../utils/getFormatted';

export interface CountriesNewCasesProps {}

const CountriesNewCases: React.FC<CountriesNewCasesProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const countryNewCasesList: CountryResponse[] = useSelector<RootState, CountryResponse[]>(
    (state: RootState) => state.countryNewCasesList,
  );
  const formattedCountryList: FormattedArray[] = getFormattedCountry(countryNewCasesList);

  useEffect(() => {
    if (countryNewCasesList.length === 0) {
      dispatch(Actions.getCountryNewCasesList());
    }
  }, [dispatch, countryNewCasesList]);

  return (
    <>
      <CountryListContainer countryList={formattedCountryList} type='new cases' />
    </>
  );
};

export default CountriesNewCases;
