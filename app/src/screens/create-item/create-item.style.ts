import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

import { COLORS } from '@constants/color';

export const CreateItemStyle = {
  Container: styled.View`
    flex: 1;
  `,

  Label: styled.Text`
    font-size: 20px;
    font-weight: bold;
  `,

  Error: styled.Text`
    color: ${COLORS.LOGIN.error_text};
  `,

  Input: styled.TextInput`
    border-bottom-color: ${COLORS.text_color};
    border-bottom-width: 2px;
    margin: 10px;
    width: 100%;
  `,

  Button: styled.Button`
    padding: 15px 30px;
    background: ${COLORS.CREATE_ITEM.submit_button};
  `,

  Map: styled(MapView)`
    flex: 1;
  `,

  Marker: styled(Marker)``,
};
