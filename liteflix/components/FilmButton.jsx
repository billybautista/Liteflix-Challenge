import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FilmButton({title, top, align, down, onPress}) {
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: down,
        width: '100%',
        alignItems: align,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontFamily: 'BebasNeue-Regular',
            fontSize: 20,
            letterSpacing: 3,
            color: 'white',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
