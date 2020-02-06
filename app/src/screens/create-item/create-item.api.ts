import Axios from 'axios';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';

import { DATABASE, CONFIG } from '@constants/database';
import { STRINGS } from '@constants/string';

const { CREATE_ITEM } = STRINGS;

export const CreateItemAPI = {
  createItem: (item: IItemField): Promise<IItem> =>
    ajaxErrorCall(async () => {
      const req = await Axios.post<IItem>(DATABASE.URL.item, item, CONFIG);
      return req.data;
    }, CREATE_ITEM.error_create_item),

  fetchUserId: async (): Promise<string> =>
    ajaxErrorCall(
      async () => await Storage.getUserId(),
      CREATE_ITEM.error_fetch_user_id
    ),
};
