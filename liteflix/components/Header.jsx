import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import AddIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({navigation}) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AddIcon name="text" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>LiteFlix</Text>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Image
            source={require('../assets/Perfil.png')}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginTop: 40,
    height: 60,
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 40,
    color: '#64EEBC',
    letterSpacing: 5,
  },
});
