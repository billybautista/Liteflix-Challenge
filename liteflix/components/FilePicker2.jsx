import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {MovieContext} from '../context/MovieContext';
import {uploadFile} from '../services/uploadFile';

export default function FilePicker() {
  const {file, setFile} = useContext(MovieContext);
  console.log(file);
  const [image, setImage] = useState(null);

  const [progress, setProgress] = useState(0);

  const {width, height} = Dimensions.get('window');

  const handleFilePicker = async () => {
    try {
      const picked = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(picked[0]);

      if (picked[0].type.includes('image')) {
        cloudinaryUpload(picked[0]);
      } else {
        console.log('no entro');
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the picker');
      } else {
        throw error;
      }
    }
  };

  const cloudinaryUpload = async photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'g7wu4eq5');
    data.append('cloud_name', 'dqi2lbaqn');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dqi2lbaqn/upload',
      {
        method: 'post',
        body: data,
      },
    );
    const file = await res.json();
    console.log('file', file);
    setImage(file.secure_url);
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => handleFilePicker()}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'white',
          borderWidth: 0.8,
          height: 80,
          borderStyle: 'dashed',
          borderRadius: 2,
        }}>
        <Text
          style={{
            fontFamily: 'BebasNeue-Regular',
            fontSize: 20,
            letterSpacing: 3,
            color: 'white',
          }}>
          Agrega un Archivo
        </Text>
      </TouchableOpacity>
      {image !== null ? (
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
