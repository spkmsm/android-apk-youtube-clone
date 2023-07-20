/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Navbar from './component/Navbar';
import Chanels from './Subscriptionsscreens/Chanels';
import Filters from './Subscriptionsscreens/Filters';

const Subscription = () => {
  return (
    <View style={{minHeight: '100%', backgroundColor: 'white'}}>
      <Navbar />
      <Chanels />
      <Filters />
    </View>
  );
};

export default Subscription;
