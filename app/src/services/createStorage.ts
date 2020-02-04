import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_FIELD = {
  item_coordinate: 'item_coordinate',
  user_id: 'user',
};

const ITEM_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};
const USER_ID: string = '5e398796b092be484a73d9cf';

export class Storage {
  constructor() {
    const coordinate: string = JSON.stringify(ITEM_COORDINATES);
    AsyncStorage.setItem(STORAGE_FIELD.user_id, USER_ID);
    AsyncStorage.setItem(STORAGE_FIELD.item_coordinate, coordinate);
  }

  static async getUserId(): Promise<string> {
    try {
      return (await AsyncStorage.getItem(STORAGE_FIELD.user_id)) ?? '';
    } catch {
      return USER_ID;
    }
  }

  static async setUserId(id: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_FIELD.user_id, id);
    } catch (e) {
      console.error(e);
    }
  }

  static async getItemCoordinates(): Promise<LatLng> {
    try {
      const coordinates: string =
        (await AsyncStorage.getItem(STORAGE_FIELD.item_coordinate)) ?? '';
      return JSON.parse(coordinates);
    } catch {
      return ITEM_COORDINATES;
    }
  }

  static async setItemCoordinates(coordinates: LatLng): Promise<void> {
    try {
      await AsyncStorage.setItem(
        STORAGE_FIELD.item_coordinate,
        JSON.stringify(coordinates)
      );
    } catch (e) {
      console.log(e);
    }
  }
}
