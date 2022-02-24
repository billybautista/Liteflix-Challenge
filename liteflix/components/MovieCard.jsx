import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Play from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieCard({
  title,
  image,
  ranking,
  year,
  play,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: '#242424', marginBottom: 20}}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        imageStyle={{borderRadius: 4}}
        style={{
          width: '100%',
          height: 250,
        }}>
        {play ? (
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 0, y: 1}}
            style={{opacity: 0.8}}
            colors={['rgba(52, 52, 52, 0)', '#242424']}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: '60%',
                  marginHorizontal: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',

                    alignItems: 'center',
                  }}>
                  <Play name="play" size={60} color="white" />
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'BebasNeue-Regular',
                      letterSpacing: 5,
                      fontSize: 30,
                    }}>
                    {title}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    marginTop: 30,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="star"
                      size={25}
                      color="#64EEBC"
                      style={{marginHorizontal: 10}}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'BebasNeue-Regular',
                        letterSpacing: 5,
                        fontSize: 25,
                      }}>
                      {ranking}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'BebasNeue-Regular',
                      letterSpacing: 5,
                      fontSize: 25,
                    }}>
                    {year}
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        ) : (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{opacity: 0.8}}
            colors={['rgba(52, 52, 52, 0)', '#242424']}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <Play
                  name="play"
                  size={80}
                  color="white"
                  style={{marginBottom: 20}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'BebasNeue-Regular',
                    letterSpacing: 5,
                    fontSize: 30,
                  }}>
                  {title}
                </Text>
              </View>
            </View>
          </LinearGradient>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
