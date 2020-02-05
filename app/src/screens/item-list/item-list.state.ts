import { LatLng } from 'react-native-maps';
import { useEffect, useState } from 'react';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import { ItemListApi } from './item-list.api';

import { ROUTES } from '@constants/routes';
interface IItemListState {
  items: IItem[];
  isError: boolean;
}

const initialState: IItemListState = {
  items: [],
  isError: false,
};

export const useItemList = (
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >
) => {
  const [state, setState] = useState<IItemListState>(initialState);
  const error = () => setState((current) => ({ ...current, isError: true }));

  // * First load all items
  useEffect(() => {
    setAllItems();
  }, []);

  const setUserItems = async () => {
    try {
      const items: IItem[] = await ItemListApi.fetchItemsByUserId();
      setState((state) => ({ ...state, items, isError: false }));
    } catch {
      error();
    }
  };

  const setAllItems = async () => {
    try {
      const items: IItem[] = await ItemListApi.fetchAllItems();
      setState((state) => ({ ...state, items, isError: false }));
    } catch {
      error();
    }
  };

  const navigateToMap = (coordinate: LatLng) => {
    navigation.navigate(ROUTES.Map);
    ItemListApi.setItemCoordinates(coordinate);
  };

  const navigateToCreateItem = () => {
    navigation.navigate(ROUTES.Create);
  };

  return {
    ...state,
    setUserItems,
    setAllItems,
    navigateToMap,
    navigateToCreateItem,
  };
};
