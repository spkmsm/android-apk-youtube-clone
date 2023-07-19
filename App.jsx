/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Navbar from './component/Navbar';
import QuickSearch from './component/QuickSearch';
import Videos from './component/Videos';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Shorts from './Shorts';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Subscription from './Subscription';
import Library from './Library';

const App = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Fontisto name="home" color="black" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Shorts"
          component={Shorts}
          options={{
            tabBarLabel: 'Shorts',
            tabBarIcon: ({color}) => (
              <AntDesign name="retweet" color="black" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Shorts}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <AntDesign name="pluscircle" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{
            tabBarLabel: 'Subscription',
            tabBarIcon: ({color}) => (
              <Entypo name="archive" color="black" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({color}) => (
              <Entypo name="area-graph" color="black" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
