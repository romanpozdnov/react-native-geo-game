import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';
import { FoundAPI } from '@services/api/api-found';

import { STRINGS } from '@constants/string';

const { MAP: ERROR } = STRINGS.ERROR;

export const MapAPI = {
  fetchItemCoordinates: (): Promise<LatLng> =>
    ajaxErrorCall(
      async () => await Storage.getItemCoordinates(),
      ERROR.get_item_coordinates
    ),

  addToItemFoundList: (): Promise<IFound> =>
    ajaxErrorCall(async () => {
      const idUser: string = await Storage.getUserId();
      const idItem: string = await Storage.getItemId();
      const userFound = await FoundAPI.getByUserId(idUser);
      const itemsIdList: string[] = [...userFound.itemsIdList, idItem];
      const newFound: IFoundField = {
        idUser,
        itemsIdList,
      };

      return !userFound
        ? await FoundAPI.createFound(newFound)
        : await FoundAPI.updateById(userFound._id, newFound);
    }, ERROR.get_item_coordinates),
};
