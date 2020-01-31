import * as React from 'react';
import { Marker } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';

import { COLORS } from '@constants/colore';
import { ASYNC_FIELD } from '@constants/async-storage';

import { NavigationInjectedProps } from 'react-navigation';
import { LatLng, Region } from 'react-native-maps';

import { MapStyle } from './map.style';
import { getData } from '@services/async-storage';

interface IMapProps extends NavigationInjectedProps {
  chieldren?: React.ReactNode;
}

const DEFAULT_COORDINATES: LatLng = {
  latitude: 50,
  longitude: 40,
};

export const Map: React.FC<IMapProps> = ({ navigation }) => {
  const [region, setRegion] = React.useState<Region>();
  const [itemCoord, setItemCoord] = React.useState<LatLng>(DEFAULT_COORDINATES);
  const [userCoord, setUserCoord] = React.useState<LatLng>(DEFAULT_COORDINATES);

  // * Get item coordinates
  React.useEffect(() => {
    (async () => {
      try {
        await getData<LatLng>(
          setItemCoord,
          ASYNC_FIELD.item_coordinate,
          DEFAULT_COORDINATES
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // * Get user coordinates
  React.useEffect(() => {
    navigator.watchPosition((posiiton) => {
      const { coords } = posiiton;
      const { latitude, longitude } = coords;
      setUserCoord({
        latitude,
        longitude,
      });
    });
  }, [userCoord]);

  const moveToCoordinate = (coordinate: LatLng) => {
    const { latitude, longitude } = coordinate;
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  const moveToUser = () => moveToCoordinate(userCoord);
  const moveToItem = () => moveToCoordinate(itemCoord);

  return (
    <MapStyle.Container>
      <MapStyle.Map initialRegion={region}>
        <Marker coordinate={userCoord}></Marker>
        <Marker coordinate={itemCoord}></Marker>
      </MapStyle.Map>
      <MapStyle.Navigator
        backgroundCollor={COLORS.MAP.user_move_button}
        location="left"
        onPress={moveToUser}
      />
      <MapStyle.Navigator
        backgroundCollor={COLORS.MAP.item_move_button}
        location="right"
        onPress={moveToItem}
      />
    </MapStyle.Container>
  );
};
