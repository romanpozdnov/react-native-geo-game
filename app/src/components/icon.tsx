import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type TIconName =
  | 'archive' // * https://fontawesome.com/icons/archive?style=solid
  | 'times' // * https://fontawesome.com/icons/times?style=solid
  | 'running' // * https://fontawesome.com/icons/running?style=solid
  | 'check'; // * https://fontawesome.com/icons/check?style=solid

interface IIconProps {
  name: TIconName;
  size: number;
  color: string;
}

export const FontAwesomeIcon: React.FC<IIconProps> = (props) => {
  const { name, size, color } = props;
  return <FontAwesome5 name={name} size={size} color={color} solid />;
};
