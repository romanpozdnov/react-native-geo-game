import { COLORS } from '@constants/color';
import styled from 'styled-components/native';

interface IFilterProps {
  color: string;
}

export const ItemListStyle = {
  ItemList: styled.View``,
  Container: styled.View`
    flex: 1;
  `,
  FilterBar: styled.View`
    justify-content: space-between;
    flex-direction: row;
  `,
  Filter: styled.Button<IFilterProps>`
    padding: 15px 30px;
    background-color: ${(props) => props.color};
  `,
  Create: styled.TouchableOpacity`
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50;

    background-color: ${COLORS.LOGIN.create_button_background};
    justify-content: center;
    align-items: center;
  `,
};
