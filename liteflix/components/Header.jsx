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
    height: 60,
    backgroundColor: 'red',
  },
});
