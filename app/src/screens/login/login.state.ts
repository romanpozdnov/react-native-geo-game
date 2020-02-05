import { useState } from 'react';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import { LogInAPI } from './login.api';
import { Storage } from '@services/createStorage';
import { isEmail, isPassword } from './login.util';

import { ROUTES } from '@constants/routes';

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

export const useLogIn = (
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >
) => {
  const [state, setState] = useState<ILogInState>(initialState);

  const getError = () =>
    setState((currentState) => ({ ...currentState, isError: true }));
  const removeError = () =>
    setState((currentState) => ({ ...currentState, isError: false }));

  const onLogIn = () => {
    const logIn = async () => {
      try {
        const { email, password } = state;
        const newUser: IUserField = { email, password };
        const user: IUser = await LogInAPI.getUserByEmail(newUser.email);

        if (user._id) {
          await Storage.setUserId(user._id);
          navigation.navigate(ROUTES.ItemList);
          removeError();
        } else {
        }
      } catch {
        getError();
      }
    };
    logIn();
  };

  const onCreate = () => {
    const createUser = async () => {
      try {
        const { email, password } = state;
        const formUser: IUserField = { email, password };
        const user = await LogInAPI.createUser(formUser);
        await Storage.setUserId(user._id);
        navigation.navigate(ROUTES.ItemList);
        removeError();
      } catch {
        getError();
      }
    };
    createUser();
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
