import { LatLng } from 'react-native-maps';
import axios from 'axios';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';

import { STRINGS } from '@constants/string';
import { URL, REQUEST } from '@constants/database';

const { MAP_ERROR } = STRINGS;

export const MapAPI = {
  fetchItemCoordinates: (): Promise<LatLng> =>
    ajaxErrorCall(
      async () => await Storage.getItemCoordinates(),
      MAP_ERROR.get_item_coordinates
    ),

  addToItemFoundList: (): Promise<IFound> =>
    ajaxErrorCall(async () => {
      const idUser: string = await Storage.getUserId();
      const idItem: string = await Storage.getItemId();
      const url: string = REQUEST.found_by_user_id(URL.found, idUser);
      const userFound = (await axios.get<IFound>(url)).data;
      const itemsIdList: string[] = [...userFound.itemsIdList, idItem];
      const newFound: IFoundField = {
        idUser,
        itemsIdList,
      };

      return !userFound
        ? (await axios.post<IFound>(URL.found, newFound)).data
        : (await axios.put<IFound>(URL.found, newFound)).data;
    }, MAP_ERROR.get_item_coordinates),
};
