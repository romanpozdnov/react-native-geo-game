import { LatLng } from 'react-native-maps';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';

import { STRINGS } from '@constants/string';

const { MAP } = STRINGS;

export const MapAPI = {
  fetchItemCoordinates: (): Promise<LatLng> =>
    ajaxErrorCall(
      async () => await Storage.getItemCoordinates(),
      MAP.error_get_item_coordinates
    ),
};
