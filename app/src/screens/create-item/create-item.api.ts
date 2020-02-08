import Axios from 'axios';

import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';

import { URL, CONFIG } from '@constants/database';
import { STRINGS } from '@constants/string';

const { CREATE_ITEM_ERROR } = STRINGS;

export const CreateItemAPI = {
  createItem: (item: IItemField): Promise<IItem> =>
    ajaxErrorCall(
      async () => (await Axios.post<IItem>(URL.item, item, CONFIG)).data,
      CREATE_ITEM_ERROR.create_item
    ),

  fetchUserId: async (): Promise<string> =>
    ajaxErrorCall(
      async () => await Storage.getUserId(),
      CREATE_ITEM_ERROR.fetch_user_id
    ),
};
