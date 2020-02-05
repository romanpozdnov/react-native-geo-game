import { Storage } from '@services/createStorage';
import { LatLng } from 'react-native-maps';

export const MapAPI = {
  fetchItemCoordinates: async (): Promise<LatLng> => {
    try {
      return await Storage.getItemCoordinates();
    } catch {
      return {
        latitude: 0,
        longitude: 0,
      };
    }
  },
};
