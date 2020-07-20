import { Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { fetchCountriesInformation } from '../api';
import axios from '../api/axios';
import { HomeDataResponse } from '../api/response';
import { addHomeData, InitialState as homeDataInitialState } from '../redux/homeDataSlice';
import { addCountryConfirmedListData } from './countryConfirmedListSlice';
import { addCountryDeathsListData } from './countryDeathsListSlice';
import { addCountryRecoveredListData } from './countryRecoveredListSlice';
import { RootState } from './store';

const getHomeData: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response: AxiosResponse<HomeDataResponse> = await axios.get<any, AxiosResponse<HomeDataResponse>>('');
      const { data } = response;
      const { confirmed, deaths, recovered, lastUpdate } = data;
      const payload: homeDataInitialState = {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate,
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
