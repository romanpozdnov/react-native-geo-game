import axios from 'axios';
import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';

import { DATABASE } from '@constants/database';

export const ItemListApi = {
  fetchAllItems: async (): Promise<IItem[]> =>
    await axios.get(DATABASE.item).then((res) => res.data),

  fetchItemsByUserId: async (id: string): Promise<IItem[]> =>
    await axios.get(`${DATABASE.item}?idUser=${id}`),

  fetchUserId: async (): Promise<string> => await Storage.getUserId(),

  setItemCoordinates: async (coordinates: LatLng) =>
    await Storage.setItemCoordinates(coordinates),
};
