import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { LatLng } from 'react-native-maps';

import { Item } from './item';
import { FontAwesomeIcon } from '@components/icon';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';
import { ROUTES } from '@constants/routes';

import { useItemList } from './item-list.state';
import { ItemListApi } from './item-list.api';

import { ItemListStyle } from './item-list.style';

interface IItemListProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const ItemList: React.FC<IItemListProps> = (props) => {
  const { navigation } = props;
  const { items, setAllItems, setUserItems } = useItemList();

  const navigateToMap = (coordinate: LatLng) => {
    navigation.navigate(ROUTES.Map);
    ItemListApi.setItemCoordinates(coordinate);
  };

  const navigateToCreateItem = () => {
    navigation.navigate(ROUTES.Create);
  };

  const Items = items.map((item) => {
    const { coordinates, _id } = item;
    return (
      <Item
        itemParameter={item}
        key={_id}
        navigateToMap={() => navigateToMap(coordinates)}
      />
    );
  });

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
      <ItemListStyle.Create onPress={navigateToCreateItem}>
        <FontAwesomeIcon
          color={COLORS.LOGIN.create_button_background}
          size={25}
          name="archive"
        />
      </ItemListStyle.Create>
    </ItemListStyle.Container>
  );
};