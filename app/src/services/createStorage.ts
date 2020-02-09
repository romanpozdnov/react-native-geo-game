import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

import { ajaxErrorCall } from './utils';

import { STRINGS } from '@constants/string';

const { STORAGE_ERROR } = STRINGS;
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
      STORAGE_ERROR.get_user_id
    );

  static setUserId = (id: string): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(STORAGE_FIELD.user_id, id);
    }, STORAGE_ERROR.set_user_id);

  static getItemCoordinates = (): Promise<LatLng> =>
    ajaxErrorCall(async () => {
      const coordinate: string =
        (await AsyncStorage.getItem(STORAGE_FIELD.item_coordinate)) ?? '';
      return JSON.parse(coordinate);
    }, STORAGE_ERROR.get_item_coordinate);

  static setItemCoordinates = (coordinates: LatLng): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(
        STORAGE_FIELD.item_coordinate,
        JSON.stringify(coordinates)
      );
    }, STORAGE_ERROR.set_item_coordinate);

  static getItemId = (): Promise<string> =>
    ajaxErrorCall(
      async () => await AsyncStorage.getItem<string>(STORAGE_FIELD.item_id),
      STORAGE_ERROR.get_id_item
    );

  static setItemId = (idItem: string): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(STORAGE_FIELD.item_coordinate, idItem);
    }, STORAGE_ERROR.set_id_item);
}
