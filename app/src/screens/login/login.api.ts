import Axios from 'axios';

import { STRINGS } from '@constants/string';
import { DATABASE } from '@constants/database';

const headers = { 'Content-Type': 'application/json' };

export const LogInAPI = {
  getUserByEmail: async (email: string): Promise<IUser> => {
    try {
      const url = DATABASE.DATABASE_REQUEST.user_find_by_email(email);
      const req = await Axios.get<IUser>(url);
      return req.data;
    } catch {
      throw new Error(STRINGS.LOGIN.error_user_not_found);
    }
  },

  createUser: async (newUser: IUserField): Promise<IUser> => {
    try {
      const req = await Axios.post<IUser>(DATABASE.URL.user, newUser, {
        headers,
      });
      console.log(req.status);
      return req.data;
    } catch {
      throw new Error(STRINGS.LOGIN.error_not_create);
    }
  },
};
