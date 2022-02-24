import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/Fontisto';
import AddIcon from 'react-native-vector-icons/SimpleLineIcons';
import MovieCard from '../components/MovieCard';
import {getData, storeData} from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getMovies, getPopularMovies} from '../services/getMovies';
import Check from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/Entypo';

export default function HomeScreen({navigation}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [choice, setChoice] = useState('Populares');
  const [filmes, setFilmes] = useState(null);
  const [imageBackground, setImageBackground] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const [played, setPlayed] = useState(null);

  const handleDropdown = value => {
    setChoice(value);
    setShowDropdown(false);
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // remove error
    }
    console.log('Done.');
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await get4PopularMovies();
    await getBackground();
    await getFilms();
    console.log('refreshed');
    setRefreshing(false);
  };

  useEffect(() => {
    get4PopularMovies();
    getBackground();
    getFilms();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFilms();
    });
    return unsubscribe;
  }, [navigation]);

  const getFilms = async () => {
    const films = await getData('@film');
    setFilmes(films);
  };

  const getBackground = async () => {
    const res = await getMovies();
    setImageBackground(res.results[0]);
  };

  const get4PopularMovies = async () => {
    const res = await getPopularMovies();
    setPopularMovies(res.results.slice(1, 5));
  };

  const handleGetData = async () => {
    await removeValue();
    const data = await getData('@film');
    console.log('data =>', data);
    console.log('Hola');
  };

  const image = {
    uri: 'https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg',
  };
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
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
            <Image
              source={require('../assets/Perfil.png')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        vertical
        showsVerticalScrollIndicator={false}
        style={{height: '100%'}}>
        <ImageBackground
          source={{
            uri:
              imageBackground &&
              `https://image.tmdb.org/t/p/w500${imageBackground.poster_path}`,
          }}
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
                  {imageBackground && imageBackground.original_title}
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleGetData}
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
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                fontSize: 22,
                color: 'white',
                letterSpacing: 5,
                marginRight: 5,
              }}>
              Ver:{choice}
            </Text>
            <Down name="chevron-small-down" size={35} color="white" />
          </TouchableOpacity>
          {choice === 'Populares' ? (
            <View
              style={{
                width: '90%',
                marginTop: 10,
              }}>
              {popularMovies &&
                popularMovies.map(movie => (
                  <MovieCard
                    onPress={() => setPlayed(movie.id)}
                    play={played === movie.id ? true : false}
                    key={movie.id}
                    title={movie.original_title}
                    ranking={movie.vote_average}
                    year={movie.release_date.slice(0, 4)}
                    image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                ))}
            </View>
          ) : (
            <View
              style={{
                width: '90%',
                marginTop: 10,
              }}>
              {filmes !== null ? (
                filmes.map((item, index) => (
                  <MovieCard
                    key={index}
                    onPress={() => setPlayed(index)}
                    play={played === index ? true : false}
                    title={item.title}
                    image={item.film}
                  />
                ))
              ) : (
                <View
                  style={{
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'BebasNeue-Regular',
                      fontSize: 20,
                      color: '#64EEBC',
                      letterSpacing: 5,
                      marginHorizontal: 20,
                      marginBottom: 10,
                    }}>
                    No se encontraron
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'BebasNeue-Regular',
                      fontSize: 20,
                      color: '#64EEBC',
                      letterSpacing: 5,
                      marginHorizontal: 20,
                    }}>
                    peliculas.
                  </Text>
                </View>
              )}
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
                  marginHorizontal: 20,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
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
                    <Check name="check" size={20} color="white" />
                  ) : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDropdown('Mis Peliculas')}
                style={{
                  height: 60,
                  justifyContent: 'center',
                  marginHorizontal: 20,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
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
                    <Check name="check" size={20} color="white" />
                  ) : null}
                </View>
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
