import React from 'react';
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

const image = {
  uri: 'https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg',
};

export default function MovieCard() {
  return (
    <TouchableOpacity style={{backgroundColor: '#242424', marginBottom: 20}}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{borderRadius: 4}}
        style={{
          width: '100%',
          height: 200,
        }}>
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
            <View style={{ alignItems: 'center'}}>
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
                  fontSize: PixelRatio.getPixelSizeForLayoutSize(16),
                }}>
                Encanto
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
