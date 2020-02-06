import * as React from 'react';

import { Item } from './item';
import { OpacityButton } from '@components/opacity-button';
import { IconButton } from '@components/icon-button';
import { ErrorText } from '@components/error-text';

import { useItemList } from './item-list.state';

import { COLORS } from '@constants/color';
import { STRINGS } from '@constants/string';

import { TPageNavigation } from '@constants/types';

import { ItemListStyle } from './item-list.style';

interface IItemListProps extends TPageNavigation {}

export const ItemList: React.FC<IItemListProps> = (props) => {
  const { navigation } = props;
  const {
    items,
    setAllItems,
    setUserItems,
    navigateToCreateItem,
    navigateToMap,
    isError,
  } = useItemList(navigation);

  const Items = items.map((item) => {
    const { coordinates, _id } = item;
    const navigate = () => navigateToMap(coordinates);
    return <Item itemParameter={item} key={_id} navigateToMap={navigate} />;
  });

  return (
    <ItemListStyle.Container>
      <ItemListStyle.FilterBar>
        <OpacityButton
          text={STRINGS.ITEMS.user_list}
          handleClick={setUserItems}
          backgroundColor={COLORS.ITEMS_LIST.user_item_list_button}
        />
        <OpacityButton
          text={STRINGS.ITEMS.all_item_list}
          handleClick={setAllItems}
          backgroundColor={COLORS.ITEMS_LIST.all_item_list_button}
        />
      </ItemListStyle.FilterBar>
      <ItemListStyle.ItemList>{Items}</ItemListStyle.ItemList>

      <IconButton
        handleClick={navigateToCreateItem}
        iconProps={{
          color: COLORS.LOGIN.create_button_background,
          name: 'archive',
          size: 25,
        }}
      />
      <ErrorText errorText={STRINGS.ITEMS.error_text} isError={isError} />
    </ItemListStyle.Container>
  );
};
