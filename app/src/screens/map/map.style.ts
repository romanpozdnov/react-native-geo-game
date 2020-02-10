import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const MapStyle = {
  Container: styled.View`
    flex: 1;
    position: relative;
  `,
  Map: styled(MapView)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  `,
  ItemNavigator: styled(Button)`
    background-color: ${COLORS.MAP.item_move_button};
    left: 15%;
  `,
  UserNavigator: styled(Button)`
    background-color: ${COLORS.MAP.user_move_button};
    right: 15%;
  `,
};
