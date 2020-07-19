import axios from 'axios';

const BASE_URL: string = `https://covid19.mathdro.id/api`;

export default axios.create({
  baseURL: BASE_URL,
});
