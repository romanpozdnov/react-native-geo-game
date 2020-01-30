import MapView from 'react-native-maps';
import styled from 'styled-components/native';

type IButtonPosition = 'right' | 'left';
interface IButtonParameter {
  backgroundColor: string;
  position: IButtonPosition;
}

export const MapPageStyle = {
  Map: styled(MapView)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
  Button: styled.TouchableOpacity<IButtonParameter>`
    position: absolute;
    bottom: 5%;
    border-radius: 50;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};
    ${(props) => (props.position === 'left' ? 'left: 15%;' : 'right: 15%')};
  `,
  MapPageContainer: styled.View`
    flex: 1;
    position: relative;
  `,
};
