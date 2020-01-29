import React, { FC, ReactNode, useEffect, useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { IItem, Item } from './item';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { EXAMPLE_LIST_ITEMS } from './items-page.constants';

import { Container, Title } from '@constants/style';
import { ItemList } from './items-page.style';

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

  const ItemsList = itemsList.map((item, index) => (
    <Item key={index} item={item} navigateToItemMap={navigateToItemMap} />
  ));

  return (
    <Container>
      <Title>{STRINGS.ITEMS_PAGE.title}</Title>
      <ItemList>{ItemsList}</ItemList>
    </Container>
  );
};
