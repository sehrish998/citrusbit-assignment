import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import {IMAGE_URL} from '@env';
import {useGetUpcomingMovies} from '@hooks/useGetUpcomingMovies';

const AppBannerHome = () => {
  const upcomingMovie: any = useGetUpcomingMovies(); //api call to get upcoming movies

  const renderMovieBanner = ({item, index}: any) => {
    return (
      <ImageBackground
        key={index}
        style={styles.movieBanner}
        resizeMode="cover"
        source={{
          uri: `${IMAGE_URL}${item.poster_path}`,
        }}>
        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,7)']}
          style={styles.linearContainer}>
          <Text style={styles.titles}>My List</Text>

          <TouchableOpacity
            onPress={() => {
              console.log('Clicked Play Button');
            }}
            activeOpacity={0.8}
            style={styles.playButton}>
            <Entypo name="controller-play" size={35} color="black" />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2.2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}>
              Play
            </Text>
          </TouchableOpacity>

          <Text style={styles.titles}>Info</Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={upcomingMovie?.data?.results}
        renderItem={renderMovieBanner}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(70),
    width: '100%',
  },
  movieBanner: {
    width: responsiveWidth(100),
    height: '100%',
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  linearContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  titles: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
  },
  playButton: {
    backgroundColor: 'white',
    width: responsiveWidth(28),
    height: responsiveHeight(5.5),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default AppBannerHome;
