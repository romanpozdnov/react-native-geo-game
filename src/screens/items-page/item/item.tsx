import React, { FC, ReactNode } from 'react';
import { LatLng } from 'react-native-maps';

import { ItemButton, ItemContainer } from './item.style';

export interface IItem {
  itemName: string;
  itemCoordinate: LatLng;
}
export interface IItemProps {
  item: IItem;
  navigateToItemMap: (item: IItem) => void;
  children?: ReactNode;
}

export const Item: FC<IItemProps> = ({ item, navigateToItemMap }) => {
  const { itemCoordinate, itemName } = item;
  const navigateToMap = () => navigateToItemMap(item);
  return (
    <ItemContainer>
      <ItemButton onPress={navigateToMap} title={itemName} />
    </ItemContainer>
  );
};
