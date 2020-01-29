import React, { FC, useState, useEffect, ReactNode } from 'react';
import { View, Text } from 'react-native';

import { IItem, Item } from './item';

import { EXAMPLE_LIST_ITEMS } from './items-page.constants';
import { ROUTES } from '../../constants/routes';
import { STRINGS } from '../../constants/strings';

import { NavigationInjectedProps } from 'react-navigation';

import { Title } from './items-page.style';

export interface IItemPageProps {
  children?: ReactNode;
}

export const ItemsPage: FC<IItemPageProps & NavigationInjectedProps> = ({
  navigation,
}) => {
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
    <View>
      <Title>{STRINGS.items.title}</Title>
      <View>{ItemsList}</View>
    </View>
  );
};
