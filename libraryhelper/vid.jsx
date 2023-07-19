/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const Vid = () => {
  return (
    <View style={styles.wraper}>
      <ScrollView showsVerticalScrollIndicator={true} style={{Height: '100%'}}>
        {[
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBapBkhg9gyONQqzd8xRkcLcgyYPQUGtExB_tb9Nv6eEteRBEQOaA3g5udm7aHjUZ8T8&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgN_sdy6ZczWW1Gc1CNcmNx7bNfBtrVX2NNfO91O1hkGboVWSY5BJe5QBNGA4gnjtbV4&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qZEe_Ih0uQN-jMLbiQDy8u4I74WuBg5LQg&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrRSjQLpNzNpS5w06lreHwFBJ7Yuw3yiOgjCMH1yXJ7JSdeBXkYplt9kf_5I2L7EsjGU&usqp=CAU',
        ].map((res, index) => {
          return (
            <View style={styles.box} key={index}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUyvApFWsCGm4IJC5Yf-b8FDN1tkQXlpxfA&usqp=CAU',
                }}
                width="100%"
                height={200}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                  padding: 20,
                  width: '95%',
                  height: 100,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <Image
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    width={50}
                    height={50}
                    borderRadius={50}
                  />
                  <View style={{justifyContent: 'center', gap: 2}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black',
                      }}>
                      jhbgjhgvh
                    </Text>
                    <Text>gfdhtrd</Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  :
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    alignItems: 'center',
    height: '100%',
    paddingBottom: 100,
  },
  box: {
    width: '100%',
    backgroundColor: 'white',
    height: 300,
    marginBottom: 10,
  },
});

export default Vid;
