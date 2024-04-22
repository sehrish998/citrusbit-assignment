import {useQuery} from 'react-query';

import {httpMovies} from '@api/axiosConfig';
import {MovieResponse} from '@models/MovieModel';
import {SnackbarSuccess} from '@utils/SnackBar';

async function useGetUpcomingMoviesRequest<T>() {
  try {
    const res = await httpMovies.get<MovieResponse>(`/movie/upcoming`);
    return res.data;
  } catch (err: any) {
    SnackbarSuccess(err?.response?.data?.message);
    throw new Error(err.response?.data?.message);
  }
}

export function useGetUpcomingMovies<T>() {
  return useQuery(['useGetUpcomingMovies'], () =>
    useGetUpcomingMoviesRequest<T>(),
  );
}
