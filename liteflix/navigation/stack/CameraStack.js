import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../../screens/CameraScreen';
import SuccesfullyScreen from '../../screens/SuccesfullyScreen';

const Stack = createNativeStackNavigator();
const CameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccesfullyScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
export default CameraStack;
