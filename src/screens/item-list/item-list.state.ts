import { getAllItems, getItemsByUserId } from './../../services/servers/user';
import * as React from 'react';

interface IItemListState {
  items: IItem[];
}

const INITIAL_STATE: IItemListState = {
  items: [],
};

export const useItemList = () => {
  const [state, setState] = React.useState<IItemListState>(INITIAL_STATE);

  // * First load all items
  React.useEffect(() => {
    (async () => {
      const items = await getAllItems();
      setState({ ...state, items });
    })();
  }, []);

  const setData = {
    setUserItems: () => {
      (async () => {
        const items = await getItemsByUserId();
        setState({ ...state, items });
      })();
    },
    setAllItems: () => {
      (async () => {
        const items = await getAllItems();
        setState({ ...state, items });
      })();
    },
  };

  return { state, setData };
};
