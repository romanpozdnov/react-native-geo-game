import React, { FC, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import navigator from '@react-native-community/geolocation';

import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import { NavigationInjectedProps } from 'react-navigation';
import { ROUTES } from 'constants/routes';

export interface IMapPageProps extends NavigationInjectedProps {
  coordinate: LatLng;
}
const styled = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const MapPage: FC<IMapPageProps> = ({ coordinate, navigation }) => {
  const [userLocation, setUserLocation] = useState({});

  navigator.getCurrentPosition(
    (position) => {
      const location = JSON.stringify(position);

      setUserLocation({ location });
    },
    (error) => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  const region: Region = {
    ...coordinate,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const onClick = () => {
    navigation.navigate(ROUTES.KhabarPage);
  };
  return (
    <MapView style={styled.map} region={region}>
      <Marker coordinate={coordinate} />
    </MapView>
  );
};
