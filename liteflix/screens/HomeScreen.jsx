import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/Fontisto';
import AddIcon from 'react-native-vector-icons/SimpleLineIcons';
import MovieCard from '../components/MovieCard';

const image = {
  uri: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
};

export default function HomeScreen({navigation}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [choice, setChoice] = useState('Populares');

  const handleDropdown = value => {
    setChoice(value);
    setShowDropdown(false);
  };
  console.log(choice);

  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 5,
          height: 60,
          top: 40,
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <AddIcon name="plus" size={40} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 40,
              color: '#64EEBC',
              letterSpacing: 5,
            }}>
            LiteFlix
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/Perfil.png')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{height: '100%'}}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{opacity: 0.8}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{opacity: 1.5}}
            colors={['rgba(52, 52, 52, 0)', '#242424']}>
            <View
              style={{
                height: '100%',
                marginHorizontal: 30,
                alignItems: 'center',
                justifyContent: 'flex-end',
                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'BebasNeue-Regular',
                  fontSize: 20,
                  fontWeight: '400',
                  letterSpacing: 5,
                  marginBottom: 20,
                }}>
                ORIGINAL DE LITEFLIX
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#64EEBC',
                    fontFamily: 'BebasNeue-Regular',
                    fontSize: 70,
                    letterSpacing: 2,
                    lineHeight: 90,
                  }}>
                  Spider-Man: No Way Home
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#242424',
                  height: 60,
                  width: 270,
                  marginBottom: 20,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="play-outline" size={25} color="white" />
                  <Text
                    style={{
                      fontFamily: 'BebasNeue-Regular',
                      fontSize: 22,
                      color: 'white',
                      marginLeft: 10,
                      fontWeight: '100',
                      letterSpacing: 3,
                    }}>
                    REPRODUCIR
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: 270,
                  justifyContent: 'center',
                  borderColor: 'white',
                  borderWidth: 0.8,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Plus name="plus-a" size={20} color="white" />
                  <Text
                    style={{
                      fontFamily: 'BebasNeue-Regular',
                      fontSize: 22,
                      color: 'white',
                      marginLeft: 10,
                      letterSpacing: 3,
                    }}>
                    mi lista
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#242424',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setShowDropdown(!showDropdown)}
            style={{
              height: 60,
              width: 270,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                fontSize: 22,
                color: 'white',
                letterSpacing: 5,
              }}>
              Ver:{choice}
            </Text>
          </TouchableOpacity>
          {choice === 'Populares' ? (
            <View
              style={{
                width: '90%',
                marginTop: 10,
              }}>
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </View>
          ) : (
            <View style={{backgroundColor: 'green', height: 400, width: 270}}>
              <Text>Mis Peliculas</Text>
            </View>
          )}
          {showDropdown ? (
            <View
              style={{
                backgroundColor: '#242424',
                height: 140,
                width: 375,
                position: 'absolute',
                top: 80,
              }}>
              <TouchableOpacity
                onPress={() => handleDropdown('Populares')}
                style={{
                  height: 60,
                  justifyContent: 'center',
                  marginLeft: 40,
                }}>
                <Text
                  style={{
                    fontFamily: 'BebasNeue-Regular',
                    fontSize: 18,
                    color: 'white',
                    letterSpacing: 5,
                  }}>
                  Populares
                </Text>
                {choice === 'Populares' ? (
                  <Text style={{color: 'white'}}>si</Text>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDropdown('Mis Peliculas')}
                style={{
                  height: 60,
                  justifyContent: 'center',
                  marginLeft: 40,
                }}>
                <Text
                  style={{
                    fontFamily: 'BebasNeue-Regular',
                    fontSize: 18,
                    color: 'white',
                    letterSpacing: 5,
                  }}>
                  Mis Peliculas
                </Text>
                {choice === 'Mis Peliculas' ? (
                  <Text style={{color: 'white'}}>si</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 650,
    justifyContent: 'center',
    // backgroundColor: 'rgb(0, 0, 0)',
  },
});
