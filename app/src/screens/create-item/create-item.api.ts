import { Storage } from '@services/createStorage';
import { ajaxErrorCall } from '@services/utils';
import { ItemAPI } from '@services/api/api-item';

import { STRINGS } from '@constants/string';

const { CREATE_ITEM_ERROR } = STRINGS;

export const CreateItemAPI = {
  createItem: (item: IItemField): Promise<IItem> =>
    ajaxErrorCall(
      async () => await ItemAPI.createItem(item),
      CREATE_ITEM_ERROR.create_item
    ),

  fetchUserId: async (): Promise<string> =>
    ajaxErrorCall(
      async () => await Storage.getUserId(),
      CREATE_ITEM_ERROR.fetch_user_id
    ),
};
