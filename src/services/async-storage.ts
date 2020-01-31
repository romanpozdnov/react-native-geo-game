import AsyncStorage from '@react-native-community/async-storage';

export const getData = async <T>(
  fieldName: string,
  defaultValue: T,
  errorValue?: T
): Promise<T> => {
  try {
    const item: string | T =
      (await AsyncStorage.getItem(fieldName)) ?? defaultValue;
    return typeof item === 'string' ? (JSON.parse(item) as T) : item;
  } catch (e) {
    return errorValue ?? defaultValue;
  }
};
