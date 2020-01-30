import { AsyncStorage } from 'react-native';

export const getStorageData = async (keyName: string) => {
  try {
    return await AsyncStorage.getItem(keyName);
  } catch (e) {
    return '';
  }
};

export const storeStorageData = async () => {
  try {
    await AsyncStorage.setItem('@storage_Key', 'stored value');
  } catch (e) {
    // saving error
  }
};
