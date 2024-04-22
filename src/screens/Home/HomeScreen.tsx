import React, {useEffect} from 'react';
import {StyleSheet, FlatList, ScrollView, StatusBar} from 'react-native';

import {useGetAllMovies} from '@hooks/useGetAllMovies';
import AppHorizontalScroll from '@components/AppHorizontalScroll';
import {useGetAllGenre} from '@hooks/useGetAllGenre';
import AppBannerHome from '@components/AppBannerHome';
import {Genre} from '@models/GenreModal';
import {Movie} from '@models/MovieModel';
export interface MovieDetails {
  genreName: string;
  genreId: number;
  movies: Movie[];
}

const HomeScreen = () => {

  const [movieList, setMoviesList] = React.useState<MovieDetails[]>([]);
  const {data: movieItem}: any = useGetAllMovies(); 
  const {data: genres}: any = useGetAllGenre();

  useEffect(() => {
    getAllMovies();
  }, [movieItem , genres]);

  const getAllMovies = () => {
    genres?.genres?.map((item: Genre) => {
      const moviesWithGenre = movieItem?.results?.filter((movie: Movie) =>
        movie.genre_ids.includes(item.id),
      );
      if (moviesWithGenre?.length > 0) {
        setMoviesList((prev: MovieDetails[]) => [
          ...prev,
          {
            genreName: item.name,
            genreId: item.id,
            movies: moviesWithGenre,
          },
        ]);
      }
    });
  };

  return (

    <ScrollView style={styles.mainContainer}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <AppBannerHome />
      <FlatList
        style={styles.movieCard}
        data={movieList}
        renderItem={item => <AppHorizontalScroll item={item} />}
      />
    </ScrollView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  movieCard: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
