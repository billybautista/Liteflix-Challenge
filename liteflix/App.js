import React, {useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CameraScreen from './screens/CameraScreen';
import HomeScreen from './screens/HomeScreen';
import Home from './icons/Home';
import Favorite from './icons/Favorite';
import Camera from './icons/Camera';
import User from './icons/User';
import Search from './icons/Search';
import {requestPermission} from './utils/permissions';
import MovieProvider from './context/MovieContext';

function UserScreen() {
  return (
    <View>
      <Text>Usuario</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View>
      <Text>Busqueda</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View>
      <Text>Favoritos</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <MovieProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarHideOnKeyboard: true,
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
      </MovieProvider>
    </NavigationContainer>
  );
}
