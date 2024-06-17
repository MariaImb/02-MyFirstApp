import React from 'react';
import {View, Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');
export const DimensionScreen = () => {

  const {width, height} = useWindowDimensions()
  
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.5}}></View>
      </View>
      <Text>w: {width}, h: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: 400,
    backgroundColor: 'red',
    height: 300,
  },
  purpleBox: {
    backgroundColor: 'blue',
    height: '50%',
    width: '50%',
  },
});
