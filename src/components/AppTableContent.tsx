import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

interface MovieInfo {
  title: string;
  value: string | number | boolean;
}

const AppTableContent = ({title, value}: MovieInfo) => {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>{title}</Text>
      <Text style={styles.tableValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight:"600"
  },
});

export default React.memo(AppTableContent);
