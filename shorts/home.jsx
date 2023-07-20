import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const home = () => {
  return (
    <View style>
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    width: '100%',
    paddingBottom: 200,
    alignItems: 'center',
  },
  box: {
    width: '100%',
    backgroundColor: 'white',
    height: 100,
  },
});
export default home;
