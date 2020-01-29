import React, { FC, useState, useEffect } from 'react';
import { LatLng, Marker } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { IItem } from '../items-page/item';
import { NavigationInjectedProps } from 'react-navigation';

import { KHARKOV_REGION, DEFAULT_USER_COORDINATE } from './map-page.constants';
import { COLORS } from '../../constants/theme';

import { Button, Map, MapPageContainer, Title } from './map-page.style';
import { Alert } from 'react-native';

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
      <Title>
        {itemName}
        <Icon name="rocket" color="#900" />
      </Title>
      <Button
        onPress={moveToUser}
        backgroundColor={COLORS.move_to_user_button}
        position="left"
      />
      <Button
        onPress={moveToItem}
        backgroundColor={COLORS.move_to_item_button}
        position="right"
      />
    </MapPageContainer>
  );
};
