import axios from 'axios';

export const BASE_URL: string = `https://corona.lmao.ninja/v2`;

export default axios.create({
  baseURL: BASE_URL,
});
