import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, LatLng } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';

export interface IKhabarProps {
  coordinate: LatLng;
}

const style = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const Khabar: FC<IKhabarProps> = ({ coordinate }) => {
  return (
    <View>
      <ClusterMap
        region={{ ...coordinate, latitudeDelta: 0.1, longitudeDelta: 0.05 }}
        style={style.map}
      >
        <Marker coordinate={coordinate} />
      </ClusterMap>
    </View>
  );
};
