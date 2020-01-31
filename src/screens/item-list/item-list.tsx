import * as React from 'react';

import { NavigationInjectedProps } from 'react-navigation';
import { LatLng } from 'react-native-maps';

import { Item } from './item';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';
import { ROUTES } from '@constants/routes';

import { useItemList } from './item-list.state';

import { ItemListStyle } from './item-list.style';

import { setItemCoordinates } from './item-list.api';

interface IItemListProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const ItemList: React.FC<IItemListProps> = (props) => {
  const { navigation } = props;
  const { items, setAllItems, setUserItems } = useItemList();

  const navigateToMap = (coordinate: LatLng) => {
    navigation.navigate(ROUTES.Map);
    setItemCoordinates(coordinate);
  };

  const Items = items.map((item) => (
    <Item itemParameter={item} key={item.id} navigateToMap={navigateToMap} />
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
      <ItemListStyle.ItemList>{Items}</ItemListStyle.ItemList>
    </ItemListStyle.Container>
  );
};
