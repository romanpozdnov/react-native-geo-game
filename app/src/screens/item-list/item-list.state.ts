import { useEffect, useState } from 'react';

import { ItemListApi } from './item-list.api';
interface IItemListState {
  items: IItem[];
}

const initialState: IItemListState = {
  items: [],
};

export const useItemList = () => {
  const [state, setState] = useState<IItemListState>(initialState);

  // * First load all items
  useEffect(() => {
    const load = async () => {
      const items: IItem[] = await ItemListApi.fetchAllItems();
      setState((currentState) => ({ ...currentState, items }));
    };
    load();
  }, []);

  const setUserItems = async () => {
    const userId = await ItemListApi.fetchUserId();
    const items = await ItemListApi.fetchItemsByUserId(userId);
    setState((currentState) => ({ ...currentState, items }));
  };

  const setAllItems = async () => {
    const items = await ItemListApi.fetchAllItems();
    setState((currentState) => ({ ...currentState, items }));
  };

  return { ...state, setUserItems, setAllItems };
};
