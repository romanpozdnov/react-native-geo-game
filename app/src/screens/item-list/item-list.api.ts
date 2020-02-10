import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';
import { ItemAPI } from '@services/api/api-item';
import { FoundAPI } from '@services/api/api-found';

import { STRINGS } from '@constants/string';

const { ITEMS_LIST: ERROR } = STRINGS.ERROR;

export const ItemListAPI = {
  fetchAllItems: (): Promise<IItem[]> =>
    ajaxErrorCall(
      async () => await ItemAPI.getAll(),
      ERROR.not_found_all_items
    ),

  fetchItemsByUserId: (): Promise<IItem[]> =>
    ajaxErrorCall(async () => {
      const userId: string = await Storage.getUserId();
      return ItemAPI.getAllByUserId(userId);
    }, ERROR.not_found_items_by_user_id),

  fetchFoundUserItems: (): Promise<IItem[]> =>
    ajaxErrorCall(async () => {
      const userId: string = await Storage.getUserId();
      const { itemsIdList } = await FoundAPI.getByUserId(userId);
      return await ItemAPI.getItemByIdList(itemsIdList);
    }, ERROR.not_found_user_item),

  setItemCoordinates: async (coordinates: LatLng): Promise<void> =>
    ajaxErrorCall(
      async () => await Storage.setItemCoordinates(coordinates),
      ERROR.not_set_item_coordinate
    ),

  setItemId: async (id: string): Promise<void> =>
    ajaxErrorCall(
      async () => await Storage.setItemId(id),
      ERROR.not_set_item_id
    ),
};
