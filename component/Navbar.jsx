/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Navbar = () => {
  return (
    <View style={styles.warper}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <AntDesign name="youtube" color="red" size={30} />
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
          Youtube
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
        <FontAwesome name="video-camera" size={20} />
        <Fontisto name="search" size={18} />
        <View>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            width={20}
            height={20}
            borderRadius={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  warper: {
    width: '100%',
    backgroundColor: 'white',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 2,
  },
});

export default Navbar;
