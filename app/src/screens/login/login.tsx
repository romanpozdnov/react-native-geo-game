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

export const LogIn: React.FC<ILogInProps> = ({ navigation }) => {
  const {
    email,
    password,

    setEmail,
    setPassword,
    onLogIn,
    onCreate,

    isError,
    isExist,
    isNotFoundUser,
    isValidEmail,
    isValidPassword,
  } = useLogIn(navigation);

  return (
    <LogInStyle.Container>
      <Field
        errorText={STRINGS.LOGIN.error_email}
        setValue={setEmail}
        isValid={isValidEmail}
        text={STRINGS.LOGIN.email_title}
        value={email}
      />
      <Field
        errorText={STRINGS.LOGIN.error_password}
        setValue={setPassword}
        isValid={isValidPassword}
        text={STRINGS.LOGIN.password_title}
        value={password}
        isSecure
      />
      <OpacityButton
        handleClick={onLogIn}
        text={STRINGS.LOGIN.login_button}
        backgroundColor={COLORS.LOGIN.create_button_background}
      />
      <ErrorText
        errorText={STRINGS.LOGIN.error_already_create}
        isError={isExist}
      />
      <ErrorText
        errorText={STRINGS.LOGIN.error_user_not_found}
        isError={isNotFoundUser}
      />
      <OpacityButton
        handleClick={onCreate}
        text={STRINGS.LOGIN.create_button}
        backgroundColor={COLORS.LOGIN.create_button_background}
      />
      <ErrorText errorText={'ERROR'} isError={isError} />
    </LogInStyle.Container>
  );
};
