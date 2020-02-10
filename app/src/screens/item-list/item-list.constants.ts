import { COLORS } from '@constants/color';
import { IIconProps } from '@components/icon';

const { ITEMS_LIST } = COLORS;
const ICON_SIZE: number = 25;

export const CREATE_ITEM_ICON: IIconProps = {
  color: ITEMS_LIST.create_icon_button,
  name: 'archive',
  size: ICON_SIZE,
};
