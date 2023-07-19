/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const Chanels = () => {
  const ChanelsData = [
    {
      id: 1,
      name: 'ViperVicky',
      logo: 'https://www.designhill.com/design-blog/wp-content/uploads/2014/08/Expert-Custom-Logo-Designer.png',
    },
    {
      id: 2,
      name: 'Fireship',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    },
    {
      id: 1,
      name: 'ViperVicky',
      logo: 'https://marketplace.canva.com/EAE6FcaXByE/2/0/1600w/canva-orange-lion-art-%26-design-logo-8d9oUcErTxk.jpg',
    },
    {
      id: 2,
      name: 'Fireship',
      logo: 'https://images-platform.99static.com/LZEfQ5D0TZpnPTPzrqMCNfAlntQ=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/99/99110/attachment_99110991',
    },
    {
      id: 1,
      name: 'ViperVicky',
      logo: 'https://marketplace.canva.com/EAFMNm9ybqQ/1/0/1600w/canva-gold-luxury-initial-circle-logo-qRQJCijq_Jw.jpg',
    },
    {
      id: 2,
      name: 'Fireship',
      logo: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-logo-design-for-paint-ink-creative-template-b20133b47fab9a2290a9874d53a838f7_screen.jpg?ts=1574079014',
    },
    {
      id: 1,
      name: 'ViperVicky',
      logo: 'https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png',
    },
    {
      id: 2,
      name: 'Fireship',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    },
  ];

  return (
    <View style={styles.box}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 15}}>
          {ChanelsData.map((data, index) => {
            return (
              <View style={{alignItems: 'center', gap: 5}}>
                <Image
                  source={{
                    uri: data.logo,
                  }}
                  width={50}
                  height={50}
                  style={{borderRadius: 50}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: 1,
                  }}>
                  {data.name}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
});

export default Chanels;
