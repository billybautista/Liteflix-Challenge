import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {MovieContext} from '../context/MovieContext';

export default function FilePicker() {
  const {setFile} = useContext(MovieContext);

  const handleFilePicker = async () => {
    try {
      const picked = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFile(picked[0]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the picker');
      } else {
        throw error;
      }
    }
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={handleFilePicker} style={styles.container}>
        <Text style={styles.text}>Agrega un Archivo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 0.8,
    height: 80,
    borderStyle: 'dashed',
    borderRadius: 3,
  },
  text: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 20,
    letterSpacing: 3,
    color: 'white',
  },
});
