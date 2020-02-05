import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_FIELD = {
  item_coordinate: 'item_coordinate',
  user_id: 'user',
};
export class Storage {
  constructor() {}

  static async getUserId(): Promise<string> {
    try {
      return (await AsyncStorage.getItem(STORAGE_FIELD.user_id)) ?? '';
    } catch {
      throw new Error('Not found user id');
    }
  }

  static async setUserId(id: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_FIELD.user_id, id);
    } catch (e) {
      throw new Error('Can`t set user id');
    }
  }

  static async getItemCoordinates(): Promise<LatLng> {
    try {
      const coordinates: string =
        (await AsyncStorage.getItem(STORAGE_FIELD.item_coordinate)) ?? '';
      return JSON.parse(coordinates);
    } catch {
      throw new Error('Not found item coordinates');
    }
  }

  static async setItemCoordinates(coordinates: LatLng): Promise<void> {
    try {
      await AsyncStorage.setItem(
        STORAGE_FIELD.item_coordinate,
        JSON.stringify(coordinates)
      );
    } catch {
      throw new Error('Can`t set item coordinates');
    }
  }
}
