import React, { FC } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type TIconNames = 'times' | 'check' | 'archive' | 'running';
interface IIcon {
  iconName: TIconNames;
  color: string;
  size: number;
  children?: null;
}

export const FontAwesomeIcon: FC<IIcon> = ({ color, iconName, size }) => (
  <FontAwesome5 name={iconName} solid size={size} color={color} />
);
