import React, {useState, useContext, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FilePicker from '../components/FilePicker';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import {MovieContext} from '../context/MovieContext';
import {cloudinaryUpload} from '../utils/uploadImage';

export default function CameraScreen({navigation}) {
  const {file, setFile} = useContext(MovieContext);
  const [text, onChangeText] = useState('');
  const [image, setImage] = useState('');
  // const image = useRef('');

  const handleUpload = async () => {
    try {
      if (file.type.includes('image')) {
        console.log('file', file);
        const upload = await cloudinaryUpload(file);
        console.log('upload', upload);
        console.log('upload.secure_url', upload.secure_url);
        const image = upload.secure_url;
        return image;
        // upload.secure_url && setImage(upload.secure_url);
        // image.current = upload.secure_url;
      } else {
        console.log('Archivo no es una imagen');
      }
    } catch (error) {
      console.log('error');
    }
  };
  const handleSubmit = async () => {
    const res = await handleUpload();
    console.log('res', res);
    console.log('handleUpload', text);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242424',
        width: '100%',
      }}>
      <Header navigation={navigation} />
      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontFamily: 'BebasNeue-Regular',
            fontSize: 20,
            color: '#64EEBC',
            letterSpacing: 5,
          }}>
          agregar película
        </Text>
        <View style={{width: '100%'}}>
          {file ? <ProgressBar /> : <FilePicker />}
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <TextInput
            style={{
              height: 50,
              marginTop: 40,
              borderWidth: 1,
              borderColor: 'white',
              width: '80%',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              color: 'white',
              fontFamily: 'BebasNeue-Regular',
              letterSpacing: 3,
            }}
            textAlign={'center'}
            onChangeText={onChangeText}
            value={text}
            placeholder="Titulo"
            placeholderTextColor="white"
          />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          {file && file.type.includes('image') && text !== '' ? (
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                width: '80%',
                backgroundColor: 'white',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'BebasNeue-Regular',
                  fontSize: 20,
                  letterSpacing: 3,
                  color: '#242424',
                }}>
                Subir Pelicula
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled
              style={{
                width: '80%',
                backgroundColor: '#a7a7a7',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'BebasNeue-Regular',
                  fontSize: 20,
                  letterSpacing: 3,
                  color: '#242424',
                }}>
                Subir Pelicula
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            // onPress={() => {
            //   setFile(null);
            //   onChangeText('');
            //   navigation.navigate('Home');
            // }}
            onPress={handleGetData}
            style={{
              width: '80%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'white',
              borderWidth: 1,
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                fontSize: 20,
                letterSpacing: 3,
                color: 'white',
              }}>
              salir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
