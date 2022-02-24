import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';

export default function FavoriteScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242424',
        width: '100%',
      }}>
      <Header navigation={navigation} />
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Title title="Favoritos" align="center" size={50} down={60} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
