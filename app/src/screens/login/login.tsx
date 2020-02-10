import * as React from 'react';

import { ErrorText } from '@components/error-text';
import { OpacityButton } from '@components/opacity-button';
import { Field } from '@components/field';

import { useLogIn } from './login.state';

import { STRINGS } from '@constants/string';
import { COLORS } from '@constants/color';

import { TPageNavigation } from '@constants/types';

import { LogInStyle } from './login.style';

interface ILogInProps extends TPageNavigation {}

const { LOGIN_ERROR, LOGIN } = STRINGS;
const { LOGIN: LOGIN_COLOR } = COLORS;

export const LogIn: React.FC<ILogInProps> = ({ navigation }) => {
  const {
    email,
    password,
    error,

    setEmail,
    setPassword,
    onLogIn,
    onCreate,

    isExist,
    isNotFoundUser,
    isValidEmail,
    isValidPassword,
  } = useLogIn(navigation);

  return (
    <LogInStyle.Container>
      <Field
        errorText={LOGIN_ERROR.email}
        setValue={setEmail}
        isValid={isValidEmail}
        text={LOGIN.email_title}
        value={email}
      />
      <Field
        errorText={LOGIN_ERROR.password}
        setValue={setPassword}
        isValid={isValidPassword}
        text={LOGIN.password_title}
        value={password}
        isSecure
      />

      <OpacityButton
        handleClick={onLogIn}
        text={LOGIN.login_button}
        backgroundColor={LOGIN_COLOR.create_button_background}
      />
      <OpacityButton
        handleClick={onCreate}
        text={LOGIN.create_button}
        backgroundColor={LOGIN_COLOR.create_button_background}
      />

      <ErrorText errorText={LOGIN_ERROR.already_create} isError={isExist} />
      <ErrorText
        errorText={LOGIN_ERROR.user_not_found}
        isError={isNotFoundUser}
      />
      <ErrorText
        errorText={'Data is not valid. Please write valid data.'}
        isError={!isValidEmail || !isValidPassword}
      />
      <ErrorText errorText={error} isError={!!error} />
    </LogInStyle.Container>
  );
};
