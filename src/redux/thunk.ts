import { Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { addCountryListData, addCountryNewCasesListData } from '.';
import { fetchContinentInformation, fetchCountryList } from '../api';
import { fetchProvinceList } from '../api/api';
import axios from '../api/axios';
import { WorldWideResponse } from '../api/response';
import { addHomeData, InitialState as homeDataInitialState } from '../redux/homeDataSlice';
import { addContinentListData } from './continentListSlice';
import { addCountryConfirmedListData } from './countryConfirmedListSlice';
import { addCountryDeathsListData } from './countryDeathsListSlice';
import { addCountryRecoveredListData } from './countryRecoveredListSlice';
import { addProvinceListData } from './provinceListSlice';
import { RootState } from './store';

const getHomeData: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response: AxiosResponse<WorldWideResponse> = await axios.get<any, AxiosResponse<WorldWideResponse>>(
        '/all?yesterday=true',
      );
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
      const { data, status } = await fetchCountryList('cases');
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
      const { data, status } = await fetchCountryList('recovered');
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
      const { data, status } = await fetchCountryList('deaths');
      if (status === 200) {
        dispatch(addCountryDeathsListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getCountryNewCasesList: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchCountryList('todayCases');
      if (status === 200) {
        dispatch(addCountryNewCasesListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getContinents = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchContinentInformation();
      if (status === 200) {
        dispatch(addContinentListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getCountryList = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchCountryList();
      if (status === 200) {
        dispatch(addCountryListData(data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getProvinceList = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data, status } = await fetchProvinceList();
      if (status === 200) {
        dispatch(addProvinceListData(data));
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
  getContinents: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
  getCountryList: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
  getCountryNewCasesList: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
  getProvinceList: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
} = {
  getHomeData,
  getCountryConfirmedList,
  getCountryRecoveredList,
  getCountryDeathsList,
  getContinents,
  getCountryList,
  getCountryNewCasesList,
  getProvinceList,
};
