import { LatLng } from 'react-native-maps';

import { COLORS } from '@constants/color';

import { IIconProps } from '@components/icon';

const ICON_SIZE: number = 20;
const { MAP } = COLORS;

export const TIMEOUT_POSITION_CHECK: number = 1000;

export const DEFAULT_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};

export const USER_ICON: IIconProps = {
  color: MAP.user_icon,
  name: 'running',
  size: ICON_SIZE,
};

export const ITEM_ICON: IIconProps = {
  color: MAP.item_icon,
  name: 'archive',
  size: ICON_SIZE,
};
