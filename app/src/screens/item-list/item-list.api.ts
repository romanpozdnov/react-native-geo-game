import axios from 'axios';
import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';

import { REQUEST, URL } from '@constants/database';
import { STRINGS } from '@constants/string';

const { ITEMS_ERROR } = STRINGS;

export const ItemListAPI = {
  fetchAllItems: (): Promise<IItem[]> =>
    ajaxErrorCall(
      async () => (await axios.get<IItem[]>(URL.item)).data,
      ITEMS_ERROR.not_found_all_items
    ),

  fetchItemsByUserId: (): Promise<IItem[]> =>
    ajaxErrorCall(async () => {
      const userId: string = await Storage.getUserId();
      const url: string = REQUEST.found_by_user_id(URL.item, userId);
      return (await axios.get<IItem[]>(url)).data;
    }, ITEMS_ERROR.not_found_items_by_user_id),

  fetchFoundUserItems: (): Promise<IItem[]> =>
    ajaxErrorCall(async () => {
      const userId: string = await Storage.getUserId();
      const urlFoundItem = REQUEST.found_by_user_id(URL.found, userId);
      const { itemsIdList } = (await axios.get<IFiend>(urlFoundItem)).data;
      return (await axios.post<IItem[]>(REQUEST.user_found_item, itemsIdList))
        .data;
    }, ITEMS_ERROR.not_found_user_item),

  setItemCoordinates: async (coordinates: LatLng): Promise<void> =>
    ajaxErrorCall(
      async () => await Storage.setItemCoordinates(coordinates),
      ITEMS_ERROR.set_item_coordinate
    ),
};
