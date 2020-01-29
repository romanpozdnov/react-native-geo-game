import React, { FC, ReactNode } from 'react';

import { IItem } from './item.type';

import { ItemButton, ItemContainer } from './item.style';

interface IItemProps {
  item: IItem;
  navigateToItemMap: (item: IItem) => void;
  children?: ReactNode;
}

export const Item: FC<IItemProps> = ({ item, navigateToItemMap }) => {
  const { itemName } = item;
  const navigateToMap = () => navigateToItemMap(item);
  return (
    <ItemContainer>
      <ItemButton onPress={navigateToMap} title={itemName} />
    </ItemContainer>
  );
};
