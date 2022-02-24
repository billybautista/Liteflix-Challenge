import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Title({size, title, color, top, down, align, spacing}) {
  return (
    <View
      style={{
        marginBottom: down,
        marginTop: top,
        width: '100%',
        alignItems: align,
      }}>
      <Text
        style={{
          fontSize: size | 20,
          fontFamily: 'BebasNeue-Regular',
          color: color || 'white',
          letterSpacing: spacing || 5,
        }}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
