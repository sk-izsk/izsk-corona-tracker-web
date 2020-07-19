import { Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import axios from '../api/axios';
import { HomeDataResponse } from '../api/response';
import { addHomeData, InitialState as homeDataInitialState } from '../redux/homeDataSlice';
import { RootState } from './store';

const getHomeData: () => (dispatch: Dispatch, getState: RootState) => Promise<void> = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response: AxiosResponse<HomeDataResponse> = await axios.get<any, AxiosResponse<HomeDataResponse>>('');
      const { data } = response;
      const { confirmed, deaths, recovered, lastUpdate } = data;
      // if (!getState.homeData.lastUpdate || getState.homeData.lastUpdate !== lastUpdate) {
      console.log('tick');
      const payload: homeDataInitialState = {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate,
      };
      dispatch(addHomeData(payload));
      // }
    } catch (err) {
      console.warn(err);
    }
  };
};

export const Actions: {
  getHomeData: () => (dispatch: Dispatch, getState: RootState) => Promise<void>;
} = {
  getHomeData,
};

export { getHomeData };
