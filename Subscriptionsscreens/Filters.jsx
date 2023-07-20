/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Filters = () => {
  return (
    <View style={styles.wraper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 20,
            paddingBottom: 10,
          }}>
          {[
            'All',
            'Today',
            'Live',
            'Continue Watching',
            'Entertainment',
            'History',
            'Favorite',
            'Lived Videos',
          ].map((res, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.box,
                  {backgroundColor: res === 'All' ? 'gray' : '#f5f7f6'},
                ]}>
                <Text>{res}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    minWidth: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});

export default Filters;
