import * as React from 'react';

import { FontAwesomeIcon, IIconProps } from '@components/icon/icon';

import { IconMarkerStyle } from './icon-marker.style';
import { LatLng } from 'react-native-maps';

interface IIconMarkerProps {
  iconProps: IIconProps;
  coordinate: LatLng;
  markerTitle: string;
  children?: React.ReactNode;
}

export const IconMarker: React.FC<IIconMarkerProps> = (props) => {
  const { iconProps, coordinate, markerTitle } = props;
  return (
    <IconMarkerStyle.Marker coordinate={coordinate} title={markerTitle}>
      <FontAwesomeIcon {...iconProps} />
    </IconMarkerStyle.Marker>
  );
};
