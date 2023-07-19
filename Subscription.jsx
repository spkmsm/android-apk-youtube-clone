/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Navbar from './component/Navbar';
import Chanels from './Subscriptionsscreens/Chanels';

const Subscription = () => {
  return (
    <View style={{minHeight: '100%'}}>
      <Navbar />
      <Chanels />
    </View>
  );
};

export default Subscription;
