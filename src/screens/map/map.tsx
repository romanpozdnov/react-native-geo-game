import * as React from 'react';

import { COLORS } from '@constants/color';

import { LatLng } from 'react-native-maps';

import { MapStyle } from './map.style';
import { useMapState } from './map.state';

interface IMapProps {
  children?: React.ReactNode;
}

const DEFAULT_COORDINATES: LatLng = {
  latitude: 50,
  longitude: 40,
};

export const Map: React.FC<IMapProps> = () => {
  const { state, setRegion } = useMapState();
  const { itemCoordinates, region, userCoordinates } = state;

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
  const moveToItem = () => moveToCoordinate(itemCoordinates);

  return (
    <MapStyle.Container>
      <MapStyle.Map initialRegion={region}></MapStyle.Map>
      <MapStyle.Navigator
        backgroundColor={COLORS.MAP.user_move_button}
        location="left"
        onPress={moveToUser}
      />
      <MapStyle.Navigator
        backgroundColor={COLORS.MAP.item_move_button}
        location="right"
        onPress={moveToItem}
      />
    </MapStyle.Container>
  );
};
