import { useEffect, useState } from 'react';

import { getAllItems, getItemsByUserId, getUserId } from './item-list.api';
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
      const items = await getAllItems();
      setState((currentState) => ({ ...currentState, items }));
    };
    load();
  }, []);

  const setUserItems = async () => {
    const userId = await getUserId();
    const items = await getItemsByUserId(userId);
    setState((currentState) => ({ ...currentState, items }));
  };
  const setAllItems = async () => {
    const items = await getAllItems();
    setState((currentState) => ({ ...currentState, items }));
  };

  return { ...state, setUserItems, setAllItems };
};
