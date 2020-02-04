import Geocoder from 'react-native-geocoding';
import { LatLng } from 'react-native-maps';

export const fetchAddressByCoordinates = (
  coordinates: LatLng,
  defaultAddress?: string
): Promise<string> => {
  const geo = new Geocoder();
  geo.init('AIzaSyDTEPRM1Xb4jD0dh48O2_huADTu7iHNL0E', {
    language: 'en',
  });

  const { latitude, longitude } = coordinates;
  return geo
    .getFromLatLng(latitude, longitude)
    .then((json) => {
      const addressComponent = json.results[0].address_components[0];
      return addressComponent;
    })
    .catch((error) => defaultAddress ?? '');
};
