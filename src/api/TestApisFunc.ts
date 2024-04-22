import axios from 'axios';
import {BASE_URL, ACCESSS_TOKEN, API_KEY} from '@env';

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      headers: {
        Authorization: `Bearer ${ACCESSS_TOKEN}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getAllgenreTest = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${ACCESSS_TOKEN}`,
        },
      },
    );
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};
