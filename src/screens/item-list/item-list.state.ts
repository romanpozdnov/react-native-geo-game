import { getAllItems, getItemsByUserId, getUserId } from './item-list.api';
import React, { useEffect } from 'react';

export const useItemList = () => {
  const [items, setItems] = React.useState<IItem[]>([]);

  // * First load all items
  useEffect(() => {
    const load = async () => {
      const items = await getAllItems();
      setItems(items);
    };
    load();
  }, []);

  const setUserItems = async () => {
    const userId = await getUserId();
    const items = await getItemsByUserId(userId);
    setItems(items);
  };
  const setAllItems = async () => {
    const items = await getAllItems();
    setItems(items);
  };

  return { items, setUserItems, setAllItems };
};
