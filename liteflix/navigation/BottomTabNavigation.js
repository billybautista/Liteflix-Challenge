import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';
import Home from '../icons/Home';
import Favorite from '../icons/Favorite';
import Camera from '../icons/Camera';
import User from '../icons/User';
import Search from '../icons/Search';
import CameraStack from './stack/CameraStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
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
        component={CameraStack}
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
  );
};

export default BottomTabNavigation;
