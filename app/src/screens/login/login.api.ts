import { ajaxErrorCall } from '@services/utils';
import { UserAPI } from '@services/api/api-user';

import { STRINGS } from '@constants/string';
import { Storage } from '@services/createStorage';

const { LOGIN_ERROR } = STRINGS;

export const LogInAPI = {
  getUserByEmail: (email: string): Promise<IUser> =>
    ajaxErrorCall(
      async () => await UserAPI.getByEmail(email.toLocaleLowerCase()),
      LOGIN_ERROR.user_not_found
    ),

  createUser: (newUser: IUserField): Promise<IUser> =>
    ajaxErrorCall(
      async () => await UserAPI.createUser(newUser),
      LOGIN_ERROR.not_create
    ),

  setUserId: (id: string): Promise<void> =>
    ajaxErrorCall(
      async () => await Storage.setUserId(id),
      LOGIN_ERROR.not_set_user_id
    ),
};
