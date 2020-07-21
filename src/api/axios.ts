import axios from 'axios';

export const BASE_URL1: string = `https://covid19.mathdro.id/api`;

export const BASE_URL: string = `https://corona.lmao.ninja/v2`;

export const axios1 = axios.create({
  baseURL: BASE_URL1,
});

export default axios.create({
  baseURL: BASE_URL,
});
