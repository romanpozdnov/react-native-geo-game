import Axios from 'axios';
import { DATABASE } from '@constants/database';

const isEnableUser = async (newUser: IUserField): Promise<boolean> => {
  try {
    const user: IUserField = await Axios.get(DATABASE.user).then(
      (res) => res.data
    );
    const { email, password } = newUser;
    return email === user.email && password === user.password;
  } catch {
    return true;
  }
};

export const LogInAPI = {
  isEnableUser,

  createUser: async (newUser: IUserField): Promise<void> => {
    try {
      const isEnable: boolean = await isEnableUser(newUser);
      if (!isEnable) {
        await Axios.post(DATABASE.user, newUser, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        // TODO: ERROR
      }
    } catch {
      // TODO: error
      return;
    }
  },
};
