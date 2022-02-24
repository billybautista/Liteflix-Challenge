import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

export default function SuccesfullyScreen({navigation, route}) {
  const {title} = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.goBack();
    });
    return unsubscribe;
  }, [navigation]);

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
          height: '80%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '60%',
          }}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 30,
              letterSpacing: 3,
              color: 'white',
              marginBottom: 30,
            }}>
            ¡Felicitaciones!
          </Text>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 22,
              letterSpacing: 4,
              color: 'white',
            }}>
            {title} fue correctamente subida
          </Text>
        </View>
        <TouchableOpacity
          // onPress={handleSubmit}
          onPress={() => navigation.navigate('Home')}
          style={{
            width: '80%',
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 20,
              letterSpacing: 3,
              color: '#242424',
            }}>
            ir a home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
