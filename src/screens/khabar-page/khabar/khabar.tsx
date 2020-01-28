import React, { FC, useState, ReactNode } from 'react';
import MapView, { Marker, LatLng, Region } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';

import { KhabarName, KhabarContainer } from './khabar.style';
import { StyleSheet } from 'react-native';

export interface IKhabarProps {
  name: string;
  coordinate: LatLng;
  children?: ReactNode;
}

export const Khabar: FC<IKhabarProps> = ({ coordinate, name }) => {
  const [isShowMap, setShowMap] = useState<boolean>(false);
  const show = () => setShowMap(true);
  const hide = () => setShowMap(false);

  const onHandleClick = () => show();

  return (
    <KhabarContainer>
      <KhabarName onPress={onHandleClick} title={name} />
    </KhabarContainer>
  );
};
