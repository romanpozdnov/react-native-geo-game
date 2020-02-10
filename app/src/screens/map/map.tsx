import * as React from 'react';

import { ErrorText } from '@components/error-text';
import { IconMarker } from '@components/icon-marker';

import { useMapState } from './map.state';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';

import { MapStyle } from './map.style';

interface IMapProps {
  children?: React.ReactNode;
}

const { MAP: MAP_COLOR } = COLORS;
const { MAP } = STRINGS;
const ICON_SIZE: number = 20;

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
        <IconMarker
          markerTitle={MAP.marker_user}
          coordinate={userCoordinates}
          iconProps={{
            color: MAP_COLOR.user_icon,
            name: 'running',
            size: ICON_SIZE,
          }}
        />
        <IconMarker
          markerTitle={MAP.marker_item}
          coordinate={itemCoordinates}
          iconProps={{
            color: MAP_COLOR.item_icon,
            name: 'archive',
            size: ICON_SIZE,
          }}
        />
      </MapStyle.Map>
      <MapStyle.UserNavigator onPress={moveToUser} />
      <MapStyle.ItemNavigator onPress={moveToItem} />
      <ErrorText isError={!!error} errorText={error} />
    </MapStyle.Container>
  );
};
