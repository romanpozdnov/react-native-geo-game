import styled from 'styled-components/native';

import { COLORS } from '@constants/color';
import { IconButton } from '@components/icon-button';

interface IFilterProps {
  color: string;
}

export const ItemListStyle = {
  Container: styled.View`
    flex: 1;
    position: relative;
    background-color: ${COLORS.background_color};
  `,
  ItemList: styled.View``,
  FilterBar: styled.View`
    justify-content: space-between;
    flex-direction: row;
  `,
  Filter: styled.Button<IFilterProps>`
    padding: 15px 30px;
    background-color: ${(props) => props.color};
  `,
  CreateItemButton: styled(IconButton)`
    background-color: ${COLORS.ITEMS_LIST.create_button};
    position: absolute;
    bottom: 5%;
    right: 5%;
  `,
};
