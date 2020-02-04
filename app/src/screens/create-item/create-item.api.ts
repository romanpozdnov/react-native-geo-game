import Axios from 'axios';

import { Storage } from '@services/createStorage';

import { DATABASE } from '@constants/database';

export const CreateItemApi = {
  createItem: async (item: IItemField) =>
    await Axios.post<IItemField>(DATABASE.item, item, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  fetchUserId: async (): Promise<string> => await Storage.getUserId(),
};
