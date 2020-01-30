import { Region, LatLng } from 'react-native-maps';

export const createDefaultRegion = (coordinates: LatLng): Region => {
  const { latitude, longitude } = coordinates;
  return {
    latitude,
    longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.05,
  };
};

export const DEFAULT_USER_COORDINATE: LatLng = {
  latitude: 49.988358,
  longitude: 36.232845,
};

export const KHARKOV_CENTER_COORDINATES: LatLng = {
  latitude: 49.988358,
  longitude: 36.232845,
};

export const KHARKOV_REGION: Region = createDefaultRegion(
  KHARKOV_CENTER_COORDINATES
);
