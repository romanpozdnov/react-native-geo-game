import React, { FC, ReactNode, useEffect, useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Item } from './item';
import { ARCHIVE_ICON } from '@constants/icons';

import { IItem } from '@constants/types';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { EXAMPLE_LIST_ITEMS, ICONS_SIZE } from './items-page.constants';

import { Container } from '@constants/style';
import { ItemList, Title, CreateItemButton } from './items-page.style';

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
        <ARCHIVE_ICON size={ICONS_SIZE} />
      </CreateItemButton>
    </Container>
  );
};
