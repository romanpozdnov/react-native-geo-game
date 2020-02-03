import * as React from 'react';

import { COLORS } from '@constants/color';

import { Marker } from 'react-native-maps';

import { MapStyle } from './map.style';
import { useMapState } from './map.state';
import { FontAwesomeIcon } from '@components/icon';

interface IMapProps {
  children?: React.ReactNode;
}

export const Map: React.FC<IMapProps> = (props) => {
  const {
    itemCoordinates,
    region,
    userCoordinates,
    moveToItem,
    moveToUser,
  } = useMapState();

  return (
    <MapStyle.Container>
      <MapStyle.Map initialRegion={region}>
        <Marker coordinate={userCoordinates}>
          <FontAwesomeIcon
            color={COLORS.MAP.user_icon}
            name="running"
            size={20}
          />
        </Marker>
        <Marker coordinate={itemCoordinates}>
          <FontAwesomeIcon
            color={COLORS.MAP.item_icon}
            name="archive"
            size={20}
          />
        </Marker>
      </MapStyle.Map>
      <MapStyle.Navigator
        backgroundColor={COLORS.MAP.user_move_button}
        location="left"
        onPress={moveToUser}
      />
      <MapStyle.Navigator
        backgroundColor={COLORS.MAP.item_move_button}
        location="right"
        onPress={moveToItem}
      />
    </MapStyle.Container>
  );
};
