import { Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { fetchCountriesInformation } from '../api';
import axios from '../api/axios';
import { WorldWideResponse } from '../api/response';
import { addHomeData, InitialState as homeDataInitialState } from '../redux/homeDataSlice';
import { addCountryConfirmedListData } from './countryConfirmedListSlice';
import { addCountryDeathsListData } from './countryDeathsListSlice';
import { addCountryRecoveredListData } from './countryRecoveredListSlice';
import { RootState } from './store';

const getHomeData: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response: AxiosResponse<WorldWideResponse> = await axios.get<any, AxiosResponse<WorldWideResponse>>('/all');
      const { data } = response;
      const { deaths, recovered, cases, todayCases } = data;
      const payload: homeDataInitialState = {
        confirmed: cases,
        recovered: recovered,
        deaths: deaths,
        newCases: todayCases,
        lastUpdate: '2020-07-21T04:38:46.000Z',
      };
      dispatch(addHomeData(payload));
    } catch (err) {
      console.warn(err);
    }
  };
};

const getCountryConfirmedList: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchCountriesInformation('confirmed');
      if (status === 200) {
        dispatch(addCountryConfirmedListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getCountryRecoveredList: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchCountriesInformation('recovered');
      if (status === 200) {
        dispatch(addCountryRecoveredListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getCountryDeathsList: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchCountriesInformation('deaths');
      if (status === 200) {
        dispatch(addCountryDeathsListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

export const Actions: {
  getHomeData: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
  getCountryConfirmedList: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
  getCountryRecoveredList: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
  getCountryDeathsList: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
} = {
  getHomeData,
  getCountryConfirmedList,
  getCountryRecoveredList,
  getCountryDeathsList,
};
