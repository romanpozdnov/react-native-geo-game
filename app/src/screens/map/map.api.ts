import AsyncStorage from '@react-native-community/async-storage';

import { ASYNC_STORAGE_FIELD } from '@constants/async-storage';

import { LatLng } from 'react-native-maps';

export const getItemCoordinates = async (): Promise<LatLng> => {
  const coordinates: string =
    (await AsyncStorage.getItem(ASYNC_STORAGE_FIELD.item_coordinate)) ?? '';
  return JSON.parse(coordinates);
};
