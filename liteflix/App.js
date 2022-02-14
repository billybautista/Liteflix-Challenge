import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
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

import HomeScreen from './screens/HomeScreen';

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

function FavoriteScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function CameraScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            fontFamily: 'BebasNeue-Regular',
            fontSize: 20,
            color: '#64EEBC',
            letterSpacing: 5,
          }}>
          agregar película
        </Text>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'white',
            borderWidth: 0.8,
            width: 330,
            height: 80,
          }}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 20,
              letterSpacing: 5,
            }}>
            Agrega una Pelicula
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
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
});
