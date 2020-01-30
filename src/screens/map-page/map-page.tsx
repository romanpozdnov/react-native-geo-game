import React, { FC, useState, useEffect } from 'react';
import { LatLng, Marker, Region, AnimatedRegion } from 'react-native-maps';

import { IItem } from '@constants/types';
import { NavigationInjectedProps } from 'react-navigation';

import { COLORS } from '@constants/theme';
import {
  DEFAULT_USER_COORDINATE,
  KHARKOV_REGION,
  createDefaultRegion,
} from '@constants/coordinates';

import { Button, Map, MapPageContainer } from './map-page.style';
import { Title } from '@constants/style';
import { STRINGS } from '@constants/strings';

export interface IMapPageProps extends NavigationInjectedProps {}

export const MapPage: FC<IMapPageProps> = ({ navigation }) => {
  const [userCoordinates, setUserCoordinates] = useState<LatLng>(
    DEFAULT_USER_COORDINATE
  );
  // TODO FORGOT COORDINATE ALWAYS
  const { coordinates, name }: IItem = navigation.getParam('item');
  const [region, setRegion] = useState<Region>(KHARKOV_REGION);

  // TODO check right work
  const goToCoordinate = (coordinate: LatLng) => {
    setRegion(createDefaultRegion(coordinate));
  };

  const moveToUser = () => goToCoordinate(userCoordinates);
  const moveToItem = () => goToCoordinate(coordinates);

  return (
    <MapPageContainer>
      <Map initialRegion={region}>
        <Marker
          coordinate={coordinates}
          title={STRINGS.MAP_PAGE.user_marker_text}
        />
        <Marker
          coordinate={userCoordinates}
          title={STRINGS.MAP_PAGE.item_marker_text}
        />
      </Map>
      <Title>{name}</Title>
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
