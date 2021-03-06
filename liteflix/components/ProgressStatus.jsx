import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ProgressStatus({progress, color}) {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#e4e4e4',
          width: '100%',
          height: 10,
          borderRadius: 5,
        }}>
        <View
          style={{
            backgroundColor: color,
            height: 10,
            borderRadius: 5,
            width: `${progress}%`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
