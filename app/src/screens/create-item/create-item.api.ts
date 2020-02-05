import { DATABASE } from '@constants/database';
import Axios from 'axios';

import { Storage } from '@services/createStorage';
const headers = {
  'Content-Type': 'application/json',
};

export const CreateItemAPI = {
  createItem: async (item: IItemField): Promise<void> => {
    try {
      await Axios.post<IItemField>(DATABASE.URL.item, item, {
        headers,
      });
    } catch {
      throw new Error('Item not create');
    }
  },

  fetchUserId: async (): Promise<string> => {
    try {
      return await Storage.getUserId();
    } catch {
      throw new Error('Not found user id');
    }
  },
};
