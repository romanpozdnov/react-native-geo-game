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

import { MapPageStyle } from './map-page.style';
import { Title } from '@components/style';
import { STRINGS } from '@constants/strings';
import { FontAwesomeIcon } from '@constants/icons';

export interface IMapPageProps extends NavigationInjectedProps {}

export const MapPage: FC<IMapPageProps> = ({ navigation }) => {
  const [userCoordinates, setUserCoordinates] = useState<LatLng>(
    DEFAULT_USER_COORDINATE
  );

  const ICONS_SIZE: number = 20;

  // TODO FORGOT COORDINATE ALWAYS
  const { coordinates, name }: IItem = navigation.getParam('item');
  const [region, setRegion] = useState<Region>(KHARKOV_REGION);

  // TODO check right work
  const goToCoordinate = (coordinate: LatLng) => {
    setRegion(createDefaultRegion(coordinate));
  };

  const moveToUser = () => goToCoordinate(userCoordinates);
  const moveToItem = () => goToCoordinate(coordinates);

  // TODO: replace user/item marker
  return (
    <MapPageStyle.MapPageContainer>
      <MapPageStyle.Map initialRegion={region}>
        <Marker
          coordinate={coordinates}
          title={STRINGS.MAP_PAGE.user_marker_text}
          pinColor="green"
        >
          <FontAwesomeIcon
            color={COLORS.MAP_PAGE.user_icon}
            iconName="running"
            size={ICONS_SIZE}
          />
        </Marker>
        <Marker
          coordinate={userCoordinates}
          title={STRINGS.MAP_PAGE.item_marker_text}
        >
          <FontAwesomeIcon
            color={COLORS.MAP_PAGE.item_icon}
            iconName="archive"
            size={ICONS_SIZE}
          />
        </Marker>
      </MapPageStyle.Map>
      <Title>{name}</Title>
      <MapPageStyle.Button
        onPress={moveToUser}
        backgroundColor={COLORS.MAP_PAGE.move_to_user_button}
        position="left"
      />
      <MapPageStyle.Button
        onPress={moveToItem}
        backgroundColor={COLORS.MAP_PAGE.move_to_item_button}
        position="right"
      />
    </MapPageStyle.MapPageContainer>
  );
};
