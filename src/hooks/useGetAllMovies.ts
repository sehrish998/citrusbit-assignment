import {useQuery} from 'react-query';
import {httpMovies} from '@api/axiosConfig';

import {API_KEY} from '@env';
import { MovieResponse } from '@models/MovieModel';
import { SnackbarError } from '@utils/SnackBar';

async function useGetAllMoviesRequest<T>() {
  try {
    const res = await httpMovies.get<MovieResponse>(
      `discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
    );
    return res.data;
  } catch (err: any) {
    SnackbarError(err?.response?.data?.message);
    throw new Error(err.response?.data?.message);
  }
}

export function useGetAllMovies<T>() {
  return useQuery(['useGetAllMovies'], () => useGetAllMoviesRequest<T>());
}
