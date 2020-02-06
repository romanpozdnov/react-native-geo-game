import axios from 'axios';
import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';

import { DATABASE } from '@constants/database';
import { STRINGS } from '@constants/string';

const { ITEMS } = STRINGS;

export const ItemListApi = {
  fetchAllItems: (): Promise<IItem[]> =>
    ajaxErrorCall(async () => {
      const fetch = await axios.get<IItem[]>(DATABASE.URL.item);
      return fetch.data;
    }, ITEMS.error_not_found_all_items),

  fetchItemsByUserId: (): Promise<IItem[]> =>
    ajaxErrorCall(async () => {
      const userId: string = await Storage.getUserId();
      const url: string = DATABASE.DATABASE_REQUEST.item_by_user_id(userId);
      const items = await axios.get<IItem[]>(url);
      return items.data;
    }, ITEMS.error_not_found_items_by_user_id),

  setItemCoordinates: async (coordinates: LatLng): Promise<void> =>
    ajaxErrorCall(
      async () => await Storage.setItemCoordinates(coordinates),
      ITEMS.error_set_item_coordinate
    ),
};
