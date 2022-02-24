import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function FilmButton({title, top, align, down, onPress}) {
  const styles = StyleSheet.create({
    container: {
      marginTop: top,
      marginBottom: down,
      width: '100%',
      alignItems: align,
    },
    text: {
      fontFamily: 'BebasNeue-Regular',
      fontSize: 20,
      letterSpacing: 3,
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
