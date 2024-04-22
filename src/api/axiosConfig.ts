import axios from 'axios';
import {BASE_URL, ACCESSS_TOKEN} from '@env';

const instanceMovies = axios.create({
  baseURL: BASE_URL,
});

instanceMovies.interceptors.request.use(async function (config: any) {
  config.timeoutErrorMessage = 'Request Timed Out';
  config.headers = {
    Authorization: 'Bearer ' + ACCESSS_TOKEN,
  };
  return config;
});

export {instanceMovies as httpMovies};
