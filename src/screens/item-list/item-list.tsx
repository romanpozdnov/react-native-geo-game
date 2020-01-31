import * as React from 'react';

import { NavigationInjectedProps } from 'react-navigation';

import { Item } from './item';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';

import { useItemList } from './item-list.state';

import { ItemListStyle } from './item-list.style';
import { ROUTES } from '@constants/routes';
import AsyncStorage from '@react-native-community/async-storage';
import { ASYNC_FIELD } from '@constants/async-storage';
import { LatLng } from 'react-native-maps';

interface IItemListProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const ItemList: React.FC<IItemListProps> = (props) => {
  const { navigation } = props;
  const { state, setData } = useItemList();
  const { items } = state;
  const { setAllItems, setUserItems } = setData;

  const navigateToMap = (coordinate: LatLng) => {
    navigation.navigate(ROUTES.Map);
    AsyncStorage.setItem(
      ASYNC_FIELD.item_coordinate,
      JSON.stringify(coordinate)
    );
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
      {Items}
    </ItemListStyle.Container>
  );
};
