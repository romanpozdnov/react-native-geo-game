import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

import { ajaxErrorCall } from './utils';

import { STRINGS } from '@constants/string';

const STORAGE_FIELD = {
  item_coordinate: 'item_coordinate',
  user_id: 'user',
};
export class Storage {
  constructor() {}

  static getUserId = (): Promise<string> =>
    ajaxErrorCall(
      async () => (await AsyncStorage.getItem(STORAGE_FIELD.user_id)) ?? '',
      STRINGS.STORAGE.error_get_user_id
    );

  static setUserId = (id: string): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(STORAGE_FIELD.user_id, id);
    }, STRINGS.STORAGE.error_set_user_id);

  static getItemCoordinates = (): Promise<LatLng> =>
    ajaxErrorCall(async () => {
      const coordinate: string =
        (await AsyncStorage.getItem(STORAGE_FIELD.item_coordinate)) ?? '';
      return JSON.parse(coordinate);
    }, STRINGS.STORAGE.error_get_item_coordinate);

  static setItemCoordinates = (coordinates: LatLng): Promise<void> =>
    ajaxErrorCall(async () => {
      await AsyncStorage.setItem(
        STORAGE_FIELD.item_coordinate,
        JSON.stringify(coordinates)
      );
    }, STRINGS.STORAGE.error_set_item_coordinate);
}
