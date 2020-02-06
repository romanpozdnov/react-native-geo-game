import { useState } from 'react';

import { LogInAPI } from './login.api';
import { Storage } from '@services/createStorage';
import { isEmail, isPassword } from './login.util';

import { ROUTES } from '@constants/routes';
import { TNavigator } from '@constants/types';
import { errorUtilCall } from '@services/utils';

interface ILogInState {
  isError: boolean;
  isExist: boolean;
  isNotFoundUser: boolean;
  isValidEmail: boolean;
  isValidPassword: boolean;
  email: string;
  password: string;
}

const initialState: ILogInState = {
  isError: false,
  isNotFoundUser: false,
  isExist: false,
  isValidEmail: false,
  isValidPassword: false,

  email: '',
  password: '',
};

export const useLogIn = (navigation: TNavigator) => {
  const [state, setState] = useState<ILogInState>(initialState);

  const getError = () =>
    setState((currentState) => ({
      ...currentState,
      isError: true,
      isNotFoundUser: false,
    }));
  const removeError = () =>
    setState((currentState) => ({
      ...currentState,
      isError: false,
      isNotFoundUser: false,
    }));

  const errorUtil = errorUtilCall(getError);

  const onLogIn = () => {
    errorUtil(async () => {
      const { email, password } = state;
      const newUser: IUserField = { email, password };
      const user: IUser = await LogInAPI.getUserByEmail(newUser.email);

      if (user._id) {
        await Storage.setUserId(user._id);
        navigation.navigate(ROUTES.ItemList);
        removeError();
      } else {
        setState((state) => ({ ...state, isNotFoundUser: true }));
      }
    });
  };

  const onCreate = () => {
    errorUtil(async () => {
      const { email, password } = state;
      const formUser: IUserField = { email, password };
      const user = await LogInAPI.createUser(formUser);
      await Storage.setUserId(user._id);
      navigation.navigate(ROUTES.ItemList);
      removeError();
    });
  };

  const setEmail = (email: string) =>
    setState((current) => ({
      ...current,
      isValidEmail: isEmail(email),
      email,
    }));

  const setPassword = (password: string) =>
    setState((current) => ({
      ...current,
      isValidPassword: isPassword(password),
      password,
    }));

  return { ...state, onCreate, onLogIn, setEmail, setPassword };
};
