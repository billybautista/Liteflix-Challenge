import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async id => {
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error get interno');
  }
};

export const storeData = async (id, value) => {
  try {
    const res = await AsyncStorage.setItem(id, JSON.stringify(value));
  } catch (e) {
    console.log('Error storage interno');
  }
};
