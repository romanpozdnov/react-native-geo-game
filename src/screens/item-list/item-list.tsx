import * as React from 'react';

import { Item } from './item';

import { ITEMS } from './item-list.constant';

import { ItemListStyle } from './item-list.style';

interface IItemListProps {
  //items: IItem[];
  children?: React.ReactNode;
}

export const ItemList: React.FC<IItemListProps> = (props) => {
  const [items, setItems] = React.useState<IItem[]>([]);

  React.useEffect(() => {
    setItems(ITEMS);
  }, [items]);

  const Items = items.map((item) => (
    <Item itemParameter={item} key={item.id} />
  ));

  return <ItemListStyle.Container></ItemListStyle.Container>;
};
