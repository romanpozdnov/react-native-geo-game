import { LatLng } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

import { ASYNC_STORAGE_FIELD } from '@constants/async-storage';

const DEFAULT_ITEM_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};

AsyncStorage.setItem(ASYNC_STORAGE_FIELD.user_id, '1');
AsyncStorage.setItem(
  ASYNC_STORAGE_FIELD.item_coordinate,
  JSON.stringify(DEFAULT_ITEM_COORDINATES)
);
