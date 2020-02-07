import { LatLng } from 'react-native-maps';
import { useEffect, useState } from 'react';

import { ItemListAPI } from './item-list.api';
import { errorUtilCall } from '@services/utils';

import { ROUTES } from '@constants/routes';
import { TNavigator } from '@constants/types';
interface IItemListState {
  items: IItem[];
  isError: boolean;
}

const initialState: IItemListState = {
  items: [],
  isError: false,
};

export const useItemList = (navigation: TNavigator) => {
  const [state, setState] = useState<IItemListState>(initialState);
  const errorUtil = errorUtilCall(() =>
    setState((state) => ({ ...state, isError: true }))
  );

  // * First load all items
  useEffect(() => {
    setAllItems();
  }, []);

  const setUserItems = () => {
    errorUtil(async () => {
      const items: IItem[] = await ItemListAPI.fetchItemsByUserId();
      setState((state) => ({ ...state, items, isError: false }));
    });
  };

  const setAllItems = () => {
    errorUtil(async () => {
      const items: IItem[] = await ItemListAPI.fetchAllItems();
      setState((state) => ({ ...state, items, isError: false }));
    });
  };

  const setUserFoundItems = () => {
    errorUtil(async () => {
      const items: IItem[] = await ItemListAPI.fetchFoundUserItems();
      setState((state) => ({ ...state, items, isError: false }));
    });
  };

  const navigateToMap = (coordinate: LatLng) => {
    errorUtil(async () => {
      await ItemListAPI.setItemCoordinates(coordinate);
      navigation.navigate(ROUTES.Map);
    });
  };

  const navigateToCreateItem = () => {
    navigation.navigate(ROUTES.Create);
  };

  return {
    ...state,
    setUserItems,
    setAllItems,
    setUserFoundItems,
    navigateToMap,
    navigateToCreateItem,
  };
};
