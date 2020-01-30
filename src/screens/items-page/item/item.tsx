import React, { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@constants/icons';

import { IItem } from '@constants/types';

import { ItemContainer, ItemName } from './item.style';
import { COLORS } from '@constants/theme';

interface IItemProps {
  item: IItem;
  navigateToItemMap: (item: IItem) => void;
  children?: ReactNode;
}

export const Item: FC<IItemProps> = ({ item, navigateToItemMap }) => {
  const { name, isFound } = item;
  const navigateToMap = () => navigateToItemMap(item);
  return (
    <ItemContainer>
      <ItemName onPress={navigateToMap} title={name} />
      {isFound ? (
        <FontAwesomeIcon
          iconName="check"
          color={COLORS.ICONS.check_icon}
          size={20}
        />
      ) : (
        <FontAwesomeIcon
          iconName="times"
          color={COLORS.ICONS.cross_icon}
          size={20}
        />
      )}
    </ItemContainer>
  );
};
