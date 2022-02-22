import {PermissionsAndroid, Platform} from 'react-native';

export const requestPermission = async () => {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    console.log('Permission granted');
  }
};
