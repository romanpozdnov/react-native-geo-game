import React, { FC, useState } from 'react';
import MapView, { Marker, LatLng, Region } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';

import { KhabarName, KhabarContainer } from './khabar.style';
import { StyleSheet } from 'react-native';

export interface IKhabarProps {
  name: string;
  coordinate: LatLng;
}

const styled = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Khabar: FC<IKhabarProps> = ({ coordinate, name }) => {
  const [isShowMap, setShowMap] = useState<boolean>(false);
  const show = () => setShowMap(true);
  const hide = () => setShowMap(false);

  const onHandleClick = () => show();
  const region: Region = {
    ...coordinate,
    latitudeDelta: 0.058,
    longitudeDelta: 0.05,
  };

  return (
    <KhabarContainer>
      <KhabarName onPress={onHandleClick} title={name} />
      {isShowMap && (
        <ClusterMap style={styled.map} region={region}>
          <Marker coordinate={coordinate} />
        </ClusterMap>
      )}
    </KhabarContainer>
  );
};
