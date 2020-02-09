import { ajaxErrorCall } from '@services/utils';
import { UserAPI } from '@services/api/api-user';

import { STRINGS } from '@constants/string';

const { LOGIN } = STRINGS;

export const LogInAPI = {
  getUserByEmail: (email: string): Promise<IUser> =>
    ajaxErrorCall(
      async () => await UserAPI.getByEmail(email.toLocaleLowerCase()),
      LOGIN.error_user_not_found
    ),

  createUser: (newUser: IUserField): Promise<IUser> =>
    ajaxErrorCall(
      async () => await UserAPI.createUser(newUser),
      LOGIN.error_not_create
    ),
};
