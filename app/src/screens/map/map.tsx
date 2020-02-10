import * as React from 'react';

import { ErrorText } from '@components/error-text';
import { IconMarker } from '@components/icon-marker';

import { useMapState } from './map.state';

import { STRINGS } from '@constants/string';
import { USER_ICON, ITEM_ICON } from './map.constants';

import { MapStyle } from './map.style';

interface IMapProps {
  children?: React.ReactNode;
}

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
        <IconMarker
          markerTitle={MAP.marker_user}
          coordinate={userCoordinates}
          iconProps={USER_ICON}
        />
        <IconMarker
          markerTitle={MAP.marker_item}
          coordinate={itemCoordinates}
          iconProps={ITEM_ICON}
        />
      </MapStyle.Map>
      <MapStyle.UserNavigator onPress={moveToUser} />
      <MapStyle.ItemNavigator onPress={moveToItem} />
      <ErrorText isError={!!error} errorText={error} />
    </MapStyle.Container>
  );
};
