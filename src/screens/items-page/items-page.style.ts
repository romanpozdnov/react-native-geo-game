import styled from 'styled-components/native';
import { COLORS } from '@constants/theme';

export const ItemPageStyle = {
  ItemList: styled.View``,
  Title: styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
  `,
  CreateItemButton: styled.TouchableOpacity`
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 50px;
    height: 50px;
    border-radius: 50;
    background-color: ${COLORS.ITEM_PAGE.create_icon_but};
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
};
