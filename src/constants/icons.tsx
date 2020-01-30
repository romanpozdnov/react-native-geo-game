import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from './theme';
import { FC } from 'react';

interface IIcon {
  size: number;
}

export const CHECK_ICON: FC<IIcon> = ({ size }) => (
  <FontAwesome5
    name="check"
    solid
    size={size}
    color={COLORS.ICONS.check_icon}
  />
);
export const CROSS_ICON: FC<IIcon> = ({ size }) => (
  <FontAwesome5
    name="times"
    solid
    size={size}
    color={COLORS.ICONS.cross_icon}
  />
);

export const ARCHIVE_ICON: FC<IIcon> = ({ size }) => (
  <FontAwesome5
    name="archive"
    solid
    size={size}
    color={COLORS.ICONS.archive_icon}
  />
);
