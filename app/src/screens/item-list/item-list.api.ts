import axios from 'axios';
import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';

import { DATABASE } from '@constants/database';

export const ItemListApi = {
  fetchAllItems: async (): Promise<IItem[]> => {
    try {
      return await axios.get(DATABASE.item).then((res) => res.data);
    } catch {
      return [];
    }
  },

  fetchItemsByUserId: async (id: string): Promise<IItem[]> => {
    try {
      return await axios.get(`${DATABASE.item}?idUser=${id}`);
    } catch {
      return [];
    }
  },

  fetchUserId: async (): Promise<string> => {
    try {
      return await Storage.getUserId();
    } catch {
      return '';
    }
  },

  setItemCoordinates: async (coordinates: LatLng): Promise<void> => {
    try {
      await Storage.setItemCoordinates(coordinates);
    } catch {
      throw new Error('Not found');
    }
  },
};
