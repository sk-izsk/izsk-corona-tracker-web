import axios from './axios';

const fetchContinentInformation = async () => {
  const response = await axios.get('/continents');
  return {
    status: response.status,
    data: response.data,
  };
};

export type Sort =
  | 'cases'
  | 'todayCases'
  | 'deaths'
  | 'todayDeaths'
  | 'recovered'
  | 'active'
  | 'critical'
  | 'casesPerOneMillion'
  | 'deathsPerOneMillion';

const fetchCountryList = async (sort?: Sort) => {
  const response = sort ? await axios.get(`/countries?sort=${sort}`) : await axios.get('/countries');
  return {
    status: response.status,
    data: response.data,
  };
};

const fetchProvinceList = async () => {
  const response = await axios.get('/historical?lastdays=1');
  return {
    status: response.status,
    data: response.data,
  };
};

export { fetchContinentInformation, fetchCountryList, fetchProvinceList };
