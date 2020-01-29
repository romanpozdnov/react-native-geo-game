import React, { FC, useState } from 'react';
import { View, Button, Text } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { NavigationInjectedProps } from 'react-navigation';

import { IItem } from '../items-page/item';

import { KHARKOV_REGION } from './map-page.constants';

import { STYLE } from './map-page.style';

export interface IMapPageProps extends NavigationInjectedProps {}

export const MapPage: FC<IMapPageProps> = ({ navigation }) => {
  const { itemCoordinate, itemName }: IItem = navigation.getParam('item');

  const userCoordinates: LatLng = {
    latitude: 200,
    longitude: 100,
  };

  const goToCoordinate = (coordinate: LatLng) => {};

  const moveToUser = () => goToCoordinate(userCoordinates);
  const moveToItem = () => goToCoordinate(itemCoordinate);

  const TEST_COORDINATE = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  return (
    <View style={STYLE.container}>
      <MapView style={STYLE.map} initialRegion={KHARKOV_REGION}>
        <Marker coordinate={TEST_COORDINATE} />
        <Marker coordinate={TEST_COORDINATE} />
      </MapView>
      <Text style={STYLE.title}>{itemName}</Text>
      <View style={STYLE.buttonLeft}>
        <Button title="" onPress={moveToUser} />
      </View>
      <View style={STYLE.buttonRight}>
        <Button title="" onPress={moveToItem} />
      </View>
    </View>
  );
};
