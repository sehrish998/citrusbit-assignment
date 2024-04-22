import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {IMAGE_URL} from '@env';
import {Movie} from '@models/MovieModel';

interface MovieItems {
  index: number;
  item: {
    genreId: number;
    genreName: string;
    movies: Movie[];
  };
}

const AppHorizontalScroll = ({item}: MovieItems) => {
  const navigation: any = useNavigation();

  const renderItem = (movie: any, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.movieCard}
        onPress={() => {
          navigation.navigate('details', {
            movieDetails: movie.item,
          });
        }}>
        <FastImage
          style={styles.movieImage}
          source={{
            uri: `${IMAGE_URL}${movie?.item?.poster_path}`,
          }}
          resizeMode={'cover'}
        />
        <Text style={styles.movieTitle}>{movie?.item?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.genreTitle}>{item?.item?.genreName}</Text>
      <FlatList
        nestedScrollEnabled={true}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row'}}
        data={item?.item?.movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default React.memo(AppHorizontalScroll);

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  genreTitle: {
    color: 'white',
    fontSize: responsiveFontSize(2.3),
    marginVertical: 2,
  },
  movieCard: {
    width: responsiveWidth(40),
    margin: 7,
  },
  movieImage: {
    width: responsiveWidth(38.5),
    height: responsiveHeight(20),
    borderRadius: 5,
  },
  movieTitle: {
    marginBottom: 2,
    color: 'white',
    fontSize: responsiveFontSize(1.7),
    marginTop: 5,
    lineHeight: 18,
  },
});
