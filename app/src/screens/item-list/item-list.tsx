import * as React from 'react';

import { Item } from './item';
import { OpacityButton } from '@components/opacity-button';
import { ErrorText } from '@components/error-text';

import { useItemList } from './item-list.state';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';
import { CREATE_ITEM_ICON } from './item-list.constants';

import { TPageNavigation } from '@constants/types';

import { ItemListStyle } from './item-list.style';

interface IItemListProps extends TPageNavigation {}

const { ITEMS_LIST: ITEMS_COLOR } = COLORS;
const { ITEMS: ITEMS_STRING } = STRINGS;

export const ItemList: React.FC<IItemListProps> = (props) => {
  const { navigation } = props;
  const {
    items,
    error,

    setAllItems,
    setUserItems,
    setUserFoundItems,
    navigateToCreateItem,
    navigateToMap,
  } = useItemList(navigation);

  const Items = items.map((item) => {
    const { coordinates, _id } = item;
    const navigate = () => navigateToMap(_id, coordinates);
    return <Item itemParameter={item} key={_id} navigateToMap={navigate} />;
  });

  return (
    <ItemListStyle.Container>
      <ItemListStyle.FilterBar>
        <OpacityButton
          isRound
          text={ITEMS_STRING.user_list}
          handleClick={setUserItems}
          backgroundColor={ITEMS_COLOR.user_item_list_button}
          borderColor={ITEMS_COLOR.user_item_list_button_border}
        />
        <OpacityButton
          isRound
          text={ITEMS_STRING.found_user_items}
          handleClick={setUserFoundItems}
          backgroundColor={ITEMS_COLOR.item_found_user}
          borderColor={ITEMS_COLOR.item_found_user_border}
        />
        <OpacityButton
          isRound
          text={ITEMS_STRING.all_item_list}
          handleClick={setAllItems}
          backgroundColor={ITEMS_COLOR.all_item_list_button}
          borderColor={ITEMS_COLOR.all_item_list_button_border}
        />
      </ItemListStyle.FilterBar>
      <ItemListStyle.ItemList>{Items}</ItemListStyle.ItemList>

      <ItemListStyle.CreateItemButton
        handleClick={navigateToCreateItem}
        iconProps={CREATE_ITEM_ICON}
      />
      <ErrorText errorText={error} isError={!!error} />
    </ItemListStyle.Container>
  );
};
