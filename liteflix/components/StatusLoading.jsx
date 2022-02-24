import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function StatusLoading({title, progress, status}) {
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'BebasNeue-Regular',
          color: 'white',
          letterSpacing: 5,
          marginRight: 10,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'BebasNeue-Regular',
          color: 'white',
          letterSpacing: 5,
        }}>
        {progress} %
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
