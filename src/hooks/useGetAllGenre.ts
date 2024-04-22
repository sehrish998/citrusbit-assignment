import {useQuery} from 'react-query';
import {httpMovies} from '@api/axiosConfig';

import {API_KEY} from '@env';
import {GenreResponse} from '@models/GenreModal';
import { SnackbarError } from '@utils/SnackBar';

async function useGetAllGenreRequest<T>() {
  try {
    const res = await httpMovies.get<GenreResponse>(
      `genre/movie/list?language=en&api_key=${API_KEY}`,
    );
    return res.data;
  } catch (err: any) {
    SnackbarError(err?.response?.data?.message);
    throw new Error(err.response?.data?.message);
  }
}

export function useGetAllGenre<T>() {
  return useQuery(['useGetAllGenre'], () => useGetAllGenreRequest<T>());
}
