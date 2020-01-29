import React, { FC, useState, useEffect } from 'react';
import { LatLng, Marker } from 'react-native-maps';
import { Alert } from 'react-native';
import navigator from '@react-native-community/geolocation';

import { IItem } from '../items-page/item';
import { NavigationInjectedProps } from 'react-navigation';

import { KHARKOV_REGION } from './map-page.constants';
import { COLORS } from '@constants/theme';
// TODO move default position coordinate
import { DEFAULT_USER_COORDINATE } from '@constants/coordinates';

import { Button, Map, MapPageContainer } from './map-page.style';
import { Title } from '@constants/style';

export interface IMapPageProps extends NavigationInjectedProps {}

export const MapPage: FC<IMapPageProps> = ({ navigation }) => {
  const [userCoordinates, setUserCoordinates] = useState<LatLng>(
    DEFAULT_USER_COORDINATE
  );
  const { itemCoordinate, itemName }: IItem = navigation.getParam('item');

  useEffect(() => {
    navigator.watchPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        setUserCoordinates({
          latitude,
          longitude,
        });
      },
      (error) => Alert.alert('Location don`t found')
    );
  });

  const goToCoordinate = (coordinate: LatLng) => {};

  const moveToUser = () => goToCoordinate(userCoordinates);
  const moveToItem = () => goToCoordinate(itemCoordinate);

  return (
    <MapPageContainer>
      <Map initialRegion={KHARKOV_REGION}>
        <Marker coordinate={itemCoordinate} />
        <Marker coordinate={userCoordinates} />
      </Map>
      <Title></Title>
      <Button
        onPress={moveToUser}
        backgroundColor={COLORS.MAP_PAGE.move_to_user_button}
        position="left"
      />
      <Button
        onPress={moveToItem}
        backgroundColor={COLORS.MAP_PAGE.move_to_item_button}
        position="right"
      />
    </MapPageContainer>
  );
};