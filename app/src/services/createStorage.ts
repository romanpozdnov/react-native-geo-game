import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

import { ajaxErrorCall } from './utils';

import { STRINGS } from '@constants/string';

const { STORAGE: ERROR } = STRINGS.ERROR;

const STORAGE_FIELD = {
  item_coordinate: 'item_coordinate',
  user_id: 'user',
  item_id: 'item',
};
export class Storage {
  constructor() {}

  static getUserId = (): Promise<string> =>
    ajaxErrorCall(
      async () => (await AsyncStorage.getItem(STORAGE_FIELD.user_id)) ?? '',
      ERROR.get_user_id
    );

  static setUserId = (id: string): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(STORAGE_FIELD.user_id, id);
    }, ERROR.set_user_id);

  static getItemCoordinates = (): Promise<LatLng> =>
    ajaxErrorCall(async () => {
      const coordinate: string =
        (await AsyncStorage.getItem(STORAGE_FIELD.item_coordinate)) ?? '';
      return JSON.parse(coordinate);
    }, ERROR.get_item_coordinate);

  static setItemCoordinates = (coordinates: LatLng): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(
        STORAGE_FIELD.item_coordinate,
        JSON.stringify(coordinates)
      );
    }, ERROR.set_item_coordinate);

  static getItemId = (): Promise<string> =>
    ajaxErrorCall(
      async () => (await AsyncStorage.getItem(STORAGE_FIELD.item_id)) ?? '',
      ERROR.get_id_item
    );

  static setItemId = (idItem: string): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(STORAGE_FIELD.item_id, idItem);
    }, ERROR.set_id_item);

  static getAllItems = () => {
    ajaxErrorCall(async () => {
      await AsyncStorage.getAllKeys(async (e, keys) =>
        keys?.forEach(async (key) =>
          console.log(`${key}: ${await AsyncStorage.getItem(key)}`)
        )
      );
    }, 'ERROR');
  };
}
