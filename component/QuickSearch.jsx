/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

const QuickSearch = () => {
  return (
    <View style={{height: '8%', backgroundColor: 'white'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 10,
          }}>
          {[
            'All',
            'Education',
            'Article',
            'Sports',
            'Education',
            'Article',
            'Sports',
            'Education',
            'Article',
            'Sports',
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

export default QuickSearch;
