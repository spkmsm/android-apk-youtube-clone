/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Logo from './Subscriptionsscreens/logo';

const Shorts = () => {
  return (
    <>
      <View style={{height: '8%', backgroundColor: 'white'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
            }}>
            {[
              'all',
              'education',
              'Article',
              'Sports',
              'Education',
              'Article',
              'Entertainment',
            ].map((res, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    height: 23,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    elevation: 2,
                  }}>
                  <Text> {res}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Logo />
    </>
  );
};
export default Shorts;
