import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.goBackContainer}
      onPress={() => {
        navigation.goBack();
      }}>
      <Ionicons name="arrow-back" color="white" size={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 9999,
    backgroundColor: 'black',
    padding: 7,
    borderRadius: 100,
  },
});

export default AppBackButton;
