import * as React from 'react';

import { IconButton } from '@components/icon-button';

import { COLORS } from '@constants/color';

import { IIconProps } from '@components/icon';

interface IItemProps {
  itemParameter: IItem;
  navigateToMap: () => void;
}

export const Item: React.FC<IItemProps> = (props) => {
  const { itemParameter, navigateToMap } = props;
  const { isFound, name } = itemParameter;
  const iconProps: IIconProps = isFound
    ? {
        color: COLORS.ITEMS_LIST.found_icon,
        name: 'check',
        size: 15,
      }
    : {
        color: COLORS.ITEMS_LIST.not_found_icon,
        name: 'times',
        size: 15,
      };

  return (
    <IconButton handleClick={navigateToMap} text={name} iconProps={iconProps} />
  );
};
