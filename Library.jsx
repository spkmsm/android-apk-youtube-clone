/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

import LibraryNavbar from './libraryhelper/LibraryNavbar';
import Qa from './libraryhelper/qs';
import Vid from './libraryhelper/vid';

const Library = () => {
  return (
    <>
      <LibraryNavbar />
      <Qa />
      <Vid />
    </>
  );
};

const styles = StyleSheet.create({
  warper: {
    width: '100%',
    backgroundColor: 'pink',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Library;
