import AsyncStorage from '@react-native-community/async-storage';

export const getData = async <T>(
  setData: (data: T) => void,
  fieldName: string,
  defaultValue: T,
  errorValue?: T
) => {
  try {
    const item: string | T =
      (await AsyncStorage.getItem(fieldName)) ?? defaultValue;
    setData(typeof item === 'string' ? (JSON.parse(item) as T) : item);
  } catch (e) {
    setData(errorValue ?? defaultValue);
  }
};
