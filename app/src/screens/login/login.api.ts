import { ajaxErrorCall } from '@services/utils';
import { UserAPI } from '@services/api/api-user';

import { STRINGS } from '@constants/string';
import { Storage } from '@services/createStorage';

const { LOGIN: ERROR } = STRINGS.ERROR;

export const LogInAPI = {
  getUserByEmail: (email: string): Promise<IUser> =>
    ajaxErrorCall(
      async () => await UserAPI.getByEmail(email.toLocaleLowerCase()),
      ERROR.user_not_found
    ),

  createUser: (newUser: IUserField): Promise<IUser> =>
    ajaxErrorCall(
      async () => await UserAPI.createUser(newUser),
      ERROR.not_create
    ),

  setUserId: (id: string): Promise<void> =>
    ajaxErrorCall(
      async () => await Storage.setUserId(id),
      ERROR.not_set_user_id
    ),
};
