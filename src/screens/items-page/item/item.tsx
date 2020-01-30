import React, { FC, ReactNode } from 'react';
import { CHECK_ICON, CROSS_ICON } from '@constants/icons';

import { IItem } from '@constants/types';

import { ICON_SIZE } from './item.constants';

import { ItemContainer, ItemName } from './item.style';

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
        <CHECK_ICON size={ICON_SIZE} />
      ) : (
        <CROSS_ICON size={ICON_SIZE} />
      )}
    </ItemContainer>
  );
};
