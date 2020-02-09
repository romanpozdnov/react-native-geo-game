import * as React from 'react';
import { Marker } from 'react-native-maps';

import { FontAwesomeIcon } from '@components/icon';

import { useMapState } from './map.state';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';

import { MapStyle } from './map.style';

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
    onShacked,
  } = useMapState();

  return (
    <MapStyle.Container>
      <MapStyle.Map initialRegion={region}>
        <Marker title={STRINGS.MAP.marker_user} coordinate={userCoordinates}>
          <FontAwesomeIcon
            color={COLORS.MAP.user_icon}
            name="running"
            size={20}
          />
        </Marker>
        <Marker title={STRINGS.MAP.marker_item} coordinate={itemCoordinates}>
          <FontAwesomeIcon
            color={COLORS.MAP.item_icon}
            name="archive"
            size={20}
          />
        </Marker>
      </MapStyle.Map>
      <MapStyle.UserNavigator onPress={moveToUser} />
      <MapStyle.ItemNavigator onPress={moveToItem} />
    </MapStyle.Container>
  );
};
