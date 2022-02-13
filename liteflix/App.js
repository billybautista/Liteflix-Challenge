import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './icons/Home';
import Favorite from './icons/Favorite';
import Camera from './icons/Camera';
import User from './icons/User';
import Search from './icons/Search';
import Header from './components/Header';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/Fontisto';

const image = {
  uri: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
};

function HomeScreen() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [choice, setChoice] = useState('Populares');

  const handleDropdown = value => {
    setChoice(value);
    setShowDropdown(false);
  };
  console.log(choice);

  return (
    <>
      <ScrollView vertical>
        {/* <Header /> */}

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
            height: 400,
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
                backgroundColor: 'white',
                height: 400,
                width: '80%',
                // width: 330,
              }}>
              <View style={{marginHorizontal: 20}}>
                <Text>Populares</Text>
              </View>
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

function FavoriteScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function CameraScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function UserScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#242424" translucent={true} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#A7A7A7',
          tabBarStyle: {
            backgroundColor: '#242424',
            height: 60,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Home color={color} />,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Favorite color={color} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Search color={color} />,
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Camera color={color} />,
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <User color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 650,
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
  },
});
