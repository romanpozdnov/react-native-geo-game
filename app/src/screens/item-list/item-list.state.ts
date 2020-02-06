import { LatLng } from 'react-native-maps';
import { useEffect, useState } from 'react';

import { ItemListApi } from './item-list.api';
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
  const error = () => setState((state) => ({ ...state, isError: true }));
  const errorUtil = errorUtilCall(error);

  // * First load all items
  useEffect(() => {
    setAllItems();
  }, []);

  const setUserItems = () => {
    errorUtil(async () => {
      const items: IItem[] = await ItemListApi.fetchItemsByUserId();
      setState((state) => ({ ...state, items, isError: false }));
    });
  };

  const setAllItems = () => {
    errorUtil(async () => {
      const items: IItem[] = await ItemListApi.fetchAllItems();
      setState((state) => ({ ...state, items, isError: false }));
    });
  };

  const navigateToMap = (coordinate: LatLng) => {
    errorUtil(async () => {
      navigation.navigate(ROUTES.Map);
      await ItemListApi.setItemCoordinates(coordinate);
    });
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
