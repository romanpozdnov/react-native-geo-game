import * as React from 'react';

import { IIconProps } from '@components/icon';

import { COLORS } from '@constants/color';

import { IconButton } from '@components/icon-button';

interface IItemProps {
  itemParameter: IItem;
  navigateToMap: () => void;
}

export const Item: React.FC<IItemProps> = (props) => {
  const { itemParameter, navigateToMap } = props;
  const { isFound, name } = itemParameter;
  const iconProps: IIconProps = isFound
    ? {
        color: COLORS.ITEM.found_icon,
        name: 'check',
        size: 15,
      }
    : {
        color: COLORS.ITEM.not_found_icon,
        name: 'times',
        size: 15,
      };

  return (
    <IconButton handleClick={navigateToMap} text={name} iconProps={iconProps} />
  );
};
