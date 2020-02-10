import { LatLng } from 'react-native-maps';
import { useEffect, useState } from 'react';

import { ItemListAPI } from './item-list.api';
import { errorUtilCall } from '@services/utils';

import { ROUTES } from '@constants/routes';
import { TNavigator } from '@constants/types';
interface IItemListStateData {
  items: IItem[];
  error?: string;
}

interface IItemListState extends IItemListStateData {
  setUserItems: () => void;
  setAllItems: () => void;
  setUserFoundItems: () => void;
  navigateToMap: (id: string, coordinate: LatLng) => void;
  navigateToCreateItem: () => void;
}

const initialState: IItemListStateData = {
  items: [],
  error: '',
};

export const useItemList = (navigation: TNavigator): IItemListState => {
  const [state, setState] = useState<IItemListStateData>(initialState);
  const errorUtil = errorUtilCall((e) =>
    setState((state) => ({ ...state, error: e.message }))
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

  const navigateToMap = (id: string, coordinate: LatLng) => {
    errorUtil(async () => {
      await ItemListAPI.setItemCoordinates(coordinate);
      await ItemListAPI.setItemId(id);
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
