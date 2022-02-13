import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.contain}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    height: 80,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    backgroundColor: 'red',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
});
