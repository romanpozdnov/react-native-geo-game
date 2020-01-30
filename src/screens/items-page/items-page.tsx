import React, { FC, ReactNode, useEffect, useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Item } from './item';

import { IItem } from '@constants/types';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { EXAMPLE_LIST_ITEMS } from './items-page.constants';

import { Container } from '@constants/style';
import { ItemList, Title, CreateItemButton } from './items-page.style';
import { FontAwesomeIcon } from '@constants/icons';
import { COLORS } from '@constants/theme';

interface IItemPageProps extends NavigationInjectedProps {
  children?: ReactNode;
}

export const ItemsPage: FC<IItemPageProps> = ({ navigation }) => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);

  useEffect(() => {
    setItemsList(EXAMPLE_LIST_ITEMS);
  }, []);

  const navigateToItemMap = (item: IItem) => {
    navigation.navigate(ROUTES.MapPage, {
      item,
    });
  };

  const navigateToCreateItemPage = () => {
    navigation.navigate(ROUTES.CreateItemPage);
  };

  const ItemsList = itemsList.map((item, index) => (
    <Item key={index} item={item} navigateToItemMap={navigateToItemMap} />
  ));

  return (
    <Container>
      <Title>{STRINGS.ITEMS_PAGE.title}</Title>
      <ItemList>{ItemsList}</ItemList>
      <CreateItemButton onPress={navigateToCreateItemPage}>
        <FontAwesomeIcon
          color={COLORS.ITEM_PAGE.create_icon_but}
          iconName="archive"
          size={25}
        />
      </CreateItemButton>
    </Container>
  );
};
