import Axios from 'axios';

import { ajaxErrorCall } from '@services/utils';

import { STRINGS } from '@constants/string';
import { DATABASE, CONFIG } from '@constants/database';

const { LOGIN } = STRINGS;
const { DATABASE_REQUEST, URL } = DATABASE;

export const LogInAPI = {
  getUserByEmail: (email: string): Promise<IUser> =>
    ajaxErrorCall(async () => {
      const mail = email.toLocaleLowerCase();
      const url = DATABASE_REQUEST.user_find_by_email(mail);
      return (await Axios.get<IUser>(url)).data;
    }, LOGIN.error_user_not_found),

  createUser: (newUser: IUserField): Promise<IUser> =>
    ajaxErrorCall(
      async () => (await Axios.post<IUser>(URL.user, newUser, CONFIG)).data,
      LOGIN.error_not_create
    ),
};
