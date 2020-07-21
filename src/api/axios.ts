import axios from 'axios';

export const BASE_URL: string = `https://disease.sh/v3/covid-19`;

export default axios.create({
  baseURL: BASE_URL,
});
