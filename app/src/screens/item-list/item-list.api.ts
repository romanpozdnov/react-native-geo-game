import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

import { ASYNC_STORAGE_FIELD } from '@constants/async-storage';

export const getAllItems = () => Promise.resolve(ITEMS);

export const getItemsByUserId = (id: string) =>
  Promise.resolve(ITEMS.filter((item) => item.idUser == id));

export const getUserId = async (): Promise<string> =>
  (await AsyncStorage.getItem(ASYNC_STORAGE_FIELD.user_id)) ?? '';

export const setItemCoordinates = (coordinates: LatLng) =>
  AsyncStorage.setItem(
    ASYNC_STORAGE_FIELD.item_coordinate,
    JSON.stringify(coordinates)
  );

const ITEMS = [
  {
    id: '1',
    coordinates: {
      latitude: 37,
      longitude: 50,
    },
    idUser: '1',
    isFound: false,
    name: 'Car',
  },
  {
    id: '2',
    coordinates: {
      latitude: 37.5,
      longitude: 50,
    },
    idUser: '1',
    isFound: false,
    name: 'Man',
  },
  {
    id: '3',
    coordinates: {
      latitude: 36.5,
      longitude: 50,
    },
    idUser: '2',
    isFound: true,
    name: 'Woman',
  },
  {
    id: '4',
    coordinates: {
      latitude: 37.2,
      longitude: 50,
    },
    idUser: '2',
    isFound: false,
    name: 'Dog',
  },
];
