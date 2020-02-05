import axios from 'axios';
import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';

import { DATABASE } from '@constants/database';

export const ItemListApi = {
  fetchAllItems: async (): Promise<IItem[]> => {
    try {
      const fetch = await axios.get<IItem[]>(DATABASE.URL.item);
      return fetch.data;
    } catch {
      throw new Error('Items not found');
    }
  },

  fetchItemsByUserId: async (): Promise<IItem[]> => {
    try {
      const userId: string = await Storage.getUserId();
      const url: string = DATABASE.DATABASE_REQUEST.item_by_user_id(userId);
      const items = await axios.get<IItem[]>(url);
      return items.data;
    } catch {
      throw Error('Not found item by user id');
    }
  },

  setItemCoordinates: async (coordinates: LatLng): Promise<void> => {
    try {
      await Storage.setItemCoordinates(coordinates);
    } catch {
      throw new Error('Item coordinates not set');
    }
  },
};
