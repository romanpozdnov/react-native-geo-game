import * as React from 'react';
import { Marker } from 'react-native-maps';

import { FontAwesomeIcon } from '@components/icon';
import { ErrorText } from '@components/error-text';

import { useMapState } from './map.state';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';

import { MapStyle } from './map.style';

interface IMapProps {
  children?: React.ReactNode;
}

const { MAP: MAP_COLOR } = COLORS;
const { MAP } = STRINGS;

export const Map: React.FC<IMapProps> = (props) => {
  const {
    itemCoordinates,
    region,
    userCoordinates,
    moveToItem,
    moveToUser,
    error,
    onShacked,
  } = useMapState();

  return (
    <MapStyle.Container>
      <MapStyle.Map initialRegion={region}>
        <Marker title={MAP.marker_user} coordinate={userCoordinates}>
          <FontAwesomeIcon
            color={MAP_COLOR.user_icon}
            name="running"
            size={20}
          />
        </Marker>
        <Marker title={MAP.marker_item} coordinate={itemCoordinates}>
          <FontAwesomeIcon
            color={MAP_COLOR.item_icon}
            name="archive"
            size={20}
          />
        </Marker>
      </MapStyle.Map>
      <MapStyle.UserNavigator onPress={moveToUser} />
      <MapStyle.ItemNavigator onPress={moveToItem} />
      <ErrorText isError={!!error} errorText={error} />
    </MapStyle.Container>
  );
};
