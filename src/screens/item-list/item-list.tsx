import * as React from 'react';

import { Item } from './item';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';

import { useItemList } from './item-list.state';

import { ItemListStyle } from './item-list.style';

interface IItemListProps {
  //items: IItem[];
  children?: React.ReactNode;
}

export const ItemList: React.FC<IItemListProps> = (props) => {
  const { state, setData } = useItemList();
  const { items } = state;
  const { setAllItems, setUserItems } = setData;

  const Items = items.map((item) => (
    <Item itemParameter={item} key={item.id} />
  ));

  return (
    <ItemListStyle.Container>
      <ItemListStyle.FilterBar>
        <ItemListStyle.Filter
          title={STRINGS.ITEMS.user_list}
          onPress={setUserItems}
          color={COLORS.ITEM.user_item_list_button}
        />
        <ItemListStyle.Filter
          title={STRINGS.ITEMS.all_item_list}
          onPress={setAllItems}
          color={COLORS.ITEM.all_item_list_button}
        />
      </ItemListStyle.FilterBar>
      {Items}
    </ItemListStyle.Container>
  );
};
