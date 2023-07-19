import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Navbar from './component/Navbar';
import QuickSearch from './component/QuickSearch';
import Videos from './component/Videos';

const Home = () => {
  return (
    <View style={{backgroundColor: '#f5f7f6', minHeight: '100%'}}>
      <Navbar />
      <QuickSearch />
      <Videos />
    </View>
  );
};

export default Home;
