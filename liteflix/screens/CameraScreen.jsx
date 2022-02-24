import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FilePicker from '../components/FilePicker';
import Header from '../components/Header';

import ProgressBar from '../components/ProgressBar';
import {MovieContext} from '../context/MovieContext';
import {uploadImage} from '../utils/uploadImage';
import {getData, storeData} from '../utils/storage';

export default function CameraScreen({navigation}) {
  const {file, setFile, loading, setLoading} = useContext(MovieContext);
  const [text, onChangeText] = useState('');
  const films = [];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setFile(null);
      onChangeText('');
      setLoading(true);
    });
    return unsubscribe;
  }, [navigation]);

  const handleUpload = async () => {
    try {
      if (file.type.includes('image')) {
        const upload = await uploadImage(file);
        const image = upload.secure_url;
        return image;
      } else {
        console.log('el Archivo no es una imagen');
      }
    } catch (error) {
      console.log('error');
    }
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    const image = await handleUpload();
    const filmList = await getData('@film');

    if (filmList !== null) {
      filmList.push({film: image, title: text});
      await storeData('@film', filmList);
    } else {
      films.push({film: image, title: text});
      await storeData('@film', films);
    }
    setIsLoading(false);
    navigation.navigate('SuccessScreen', {
      title: text,
    });
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#242424',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#00AA9D" />
      </View>
    );
  }

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
              disabled={loading}
              onPress={handleSubmit}
              style={{
                width: '80%',
                backgroundColor: loading ? '#a7a7a7' : 'white',
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
            onPress={() => navigation.navigate('Home')}
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
