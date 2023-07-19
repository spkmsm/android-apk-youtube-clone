/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

const Qa = () => {
  return (
    <View style={{height: '9%', backgroundColor: 'white'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 10,
          }}>
          {[
            'create',
            'show',
            'content',
            'education',
            'sports',
            'Article',
            'space',
            'technology',
          ].map((res, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: 'white',
                  height: 40,
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
  );
};

export default Qa;
