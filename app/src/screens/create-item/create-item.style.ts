import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

export const CreateItemStyle = {
  Container: styled.View`
    flex: 1;
  `,

  Map: styled(MapView)`
    flex: 1;
  `,

  Marker: styled(Marker)``,
};
