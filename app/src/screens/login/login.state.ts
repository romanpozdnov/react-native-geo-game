import { useState } from 'react';

import { LogInAPI } from './login.api';
import { errorUtilCall } from '@services/utils';
import { isEmail, isPassword } from '@services/validation';

import { ROUTES } from '@constants/routes';

import { TNavigator } from '@constants/types';

interface ILogInStateData {
  //isError: boolean;
  email: string;
  password: string;
  error?: string;

  isExist: boolean;
  isNotFoundUser: boolean;
  isValidEmail: boolean;
  isValidPassword: boolean;
}

interface ILogInState extends ILogInStateData {
  onCreate: () => void;
  onLogIn: () => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const initialState: ILogInStateData = {
  isNotFoundUser: false,
  isExist: false,
  isValidEmail: false,
  isValidPassword: false,

  error: '',
  email: '',
  password: '',
};

export const useLogIn = (navigation: TNavigator): ILogInState => {
  const [state, setState] = useState<ILogInStateData>(initialState);

  const error = (e: Error) =>
    setState((state) => ({ ...state, error: e.message }));
  const removeError = () =>
    setState((state) => ({ ...state, error: undefined }));
  const notFoundError = () =>
    setState((state) => ({ ...state, isNotFoundUser: true }));

  const errorUtil = errorUtilCall(error, removeError);

  const onLogIn = () => {
    errorUtil(async () => {
      const user: IUser = await LogInAPI.getUserByEmail(state.email);
      if (!!user._id) {
        await LogInAPI.setUserId(user._id);
        navigation.navigate(ROUTES.ItemList);
      } else {
        notFoundError();
      }
    });
  };

  const onCreate = () => {
    errorUtil(async () => {
      const { email, password } = state;
      const user = await LogInAPI.createUser({ email, password });
      await LogInAPI.setUserId(user._id);
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
