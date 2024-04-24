import {View, Text, StyleSheet, ScrollView, StatusBar , SafeAreaView} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';

import {useGetAllGenre} from '@hooks/useGetAllGenre';
import {IMAGE_URL} from '@env';
import {Movie} from '@models/MovieModel';
import AppTableContent from '@components/AppTableContent';
import AppBackButton from '@components/AppBackButton';

const MovieDetailsScreen = (props: any) => {
  const getAllGenre: any = useGetAllGenre(); //get all the genres

  const {
    vote_count,
    original_language,
    adult,
    video,
    release_date,
    popularity,
    vote_average,
    overview,
    title,
    genre_ids,
    poster_path,
    original_title,
  }: Movie = props?.route?.params?.movieDetails; //Obj destructuring

  const filteredGenres = getAllGenre?.data?.genres?.filter((genre: any) =>
    genre_ids?.includes(genre?.id),
  ); // filter all the genres which belong to this movie

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <AppBackButton />
      <FastImage
        style={styles.posterImage}
        source={{
          uri: `${IMAGE_URL}${poster_path}`,
        }}
        resizeMode={'cover'}
      />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{
          paddingBottom: 30,
        }}>
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.overview}>{overview}</Text>

        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Genres</Text>
          <View style={styles.genreContainer}>
            {filteredGenres?.map((genre: any, index: any) => (
              <Text style={styles.tableValue} key={index}>
                {genre?.name} {filteredGenres?.length == index + 1 ? '' : ', '}
              </Text>
            ))}
          </View>
        </View>

        <AppTableContent title={'Original Title'} value={original_title} />
        <AppTableContent title={'Vote Count'} value={vote_count} />
        <AppTableContent title={'Vote Avg'} value={vote_average} />
        <AppTableContent title={'Release Date'} value={release_date} />
        <AppTableContent title={'Popularity'} value={popularity} />

        <AppTableContent
          title={'Original Language'}
          value={original_language}
        />
        <AppTableContent
          title={'Adult'}
          value={adult == false ? 'False' : 'True'}
        />
        <AppTableContent
          title={'Video'}
          value={video == false ? 'False' : 'True'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: 'black',
  },
  posterImage: {
    width: '100%',
    height: responsiveHeight(45),
  },
  genreContainer: {flexDirection: 'row'},
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  movieTitle: {
    fontWeight:"700",
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    marginTop: 20,
  },
  overview: {
    color: 'white',
    fontSize: responsiveFontSize(1.7),
    marginVertical: 10,
    lineHeight: 20,
  },
  tableContainer: {
    paddingVertical: 13,
    paddingHorizontal: 7,
    borderBottomColor: 'gray',
    borderBottomWidth: 1 / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableTitle: {
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
    fontWeight:"600"
  },
  tableValue: {
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
    fontWeight:"500"
  },
});
