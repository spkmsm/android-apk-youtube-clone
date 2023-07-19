/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const Videos = () => {
  return (
    <View style={styles.wraper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[
          'https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg',
          'https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg',
          'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-youtube-thumbnail-maker-online-design-template-b0d0e1050e510fc2784b90d522d5bbe5_screen.jpg?ts=1662402001',
          'https://global-uploads.webflow.com/63994dae1033718bee6949ce/63fdae86730d1fa2d1df15b6_AI%20YouTube%20Thumbnails.jpg',
        ].map((res, index) => {
          return (
            <View style={styles.box} key={index}>
              {/* thumbnails */}
              <Image
                source={{
                  uri: res,
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
                  {/* Avatar */}
                  <Image
                    source={{
                      uri: res,
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
                      fhjdghn
                    </Text>
                    <Text>jumb cuts .18 lakh views. 4 years ago</Text>
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
    width: '100%',
    paddingBottom: 200,
    alignItems: 'center',
  },
  box: {
    width: '100%',
    backgroundColor: 'white',
    height: 300,
    marginBottom: 10,
  },
});

export default Videos;
