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
import BottomTabNavigation from './navigation/BottomTabNavigation';

export default function App() {
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <MovieProvider>
        <BottomTabNavigation />
      </MovieProvider>
    </NavigationContainer>
  );
}
