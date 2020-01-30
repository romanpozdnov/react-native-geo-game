import * as React from 'react';
import { Marker } from 'react-native-maps';

import { COLOR } from '@constants/colore';

import { NavigationInjectedProps } from 'react-navigation';
import { LatLng, Region } from 'react-native-maps';

import { MapStyle } from './map.style';

interface IMapProps extends NavigationInjectedProps {
  chieldren?: React.ReactNode;
}

export const Map: React.FC<IMapProps> = ({ navigation }) => {
  const [region, setRegion] = React.useState<Region>();

  const userCoordinates: LatLng = {
    latitude: 0,
    longitude: 0,
  };

  const itemCoordinate: LatLng = {
    latitude: 0,
    longitude: 0,
  };

  const moveToCoordinate = (coordinate: LatLng) => {
    const { latitude, longitude } = coordinate;
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  const moveToUser = () => moveToCoordinate(userCoordinates);
  const moveToItem = () => moveToCoordinate(itemCoordinate);

  return (
    <MapStyle.Container>
      <MapStyle.Map>
        <Marker coordinate={userCoordinates}></Marker>
        <Marker coordinate={itemCoordinate}></Marker>
      </MapStyle.Map>
      <MapStyle.Navigator
        backgroundCollor={COLOR.MAP.user_move_button}
        location="left"
        onPress={moveToUser}
      />
      <MapStyle.Navigator
        backgroundCollor={COLOR.MAP.item_move_button}
        location="right"
        onPress={moveToItem}
      />
    </MapStyle.Container>
  );
};
