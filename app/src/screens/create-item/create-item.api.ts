import Axios from 'axios';

import { Storage } from '@services/createStorage';

import { DATABASE } from '@constants/database';

export const CreateItemApi = {
  createItem: async (item: IItemField): Promise<void> => {
    try {
      await Axios.post<IItemField>(DATABASE.item, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch {
      return;
    }
  },

  fetchUserId: async (): Promise<string> => {
    try {
      const id: string = await Storage.getUserId();
      return id;
    } catch {
      return '';
    }
  },
};
