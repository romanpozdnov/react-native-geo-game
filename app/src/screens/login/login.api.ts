import Axios from 'axios';

import { ajaxErrorCall } from '@services/utils';

import { STRINGS } from '@constants/string';
import { DATABASE, CONFIG } from '@constants/database';

const { LOGIN } = STRINGS;

export const LogInAPI = {
  getUserByEmail: (email: string): Promise<IUser> =>
    ajaxErrorCall(async () => {
      const url = DATABASE.DATABASE_REQUEST.user_find_by_email(email);
      const req = await Axios.get<IUser>(url);
      return req.data;
    }, LOGIN.error_user_not_found),

  createUser: (newUser: IUserField): Promise<IUser> =>
    ajaxErrorCall(async () => {
      const req = await Axios.post<IUser>(DATABASE.URL.user, newUser, CONFIG);
      return req.data;
    }, LOGIN.error_not_create),
};
