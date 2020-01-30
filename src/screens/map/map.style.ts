import MapView from 'react-native-maps';
import styled from 'styled-components/native';

type TNavigatorLocation = 'right' | 'left';
interface INavigatorProps {
  backgroundCollor: string;
  location: TNavigatorLocation;
}

const createNavigatorLocation = (location: TNavigatorLocation) =>
  location === 'left' ? 'left: 15%' : 'right: 15%';

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
  Navigator: styled.TouchableOpacity<INavigatorProps>`
    position: absolute;
    bottom: 5%;
    width: 50;
    height: 50;
    border: 50;
    background-color: ${(props) => props.backgroundCollor};
    ${(props) => createNavigatorLocation(props.location)}
  `,
};
