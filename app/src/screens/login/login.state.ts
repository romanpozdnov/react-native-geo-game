import { useState } from 'react';

import { LogInAPI } from './login.api';
import { Storage } from '@services/createStorage';
import { errorUtilCall } from '@services/utils';
import { isEmail, isPassword } from '@services/validation';

import { ROUTES } from '@constants/routes';

import { TNavigator } from '@constants/types';

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
      const user: IUser = await LogInAPI.getUserByEmail(state.email);
      if (!!user._id) {
        await Storage.setUserId(user._id);
        removeError();
        navigation.navigate(ROUTES.ItemList);
      } else {
        setState((state) => ({ ...state, isNotFoundUser: true }));
      }
    });
  };

  const onCreate = () => {
    errorUtil(async () => {
      const { email, password } = state;
      const user = await LogInAPI.createUser({ email, password });
      await Storage.setUserId(user._id);
      removeError();
      navigation.navigate(ROUTES.ItemList);
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
