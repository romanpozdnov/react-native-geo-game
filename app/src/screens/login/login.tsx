import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { useLogIn } from './login.state';

import { STRINGS } from '@constants/string';

import { LogInStyle } from './login.style';

interface ILogInProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const LogIn: React.FC<ILogInProps> = ({ navigation }) => {
  const {
    isError,
    onCreate,
    onLogIn,
    setEmail,
    setPassword,
    email,
    password,
    isExist,
    isValidEmail,
    isValidPassword,
    isNotFoundUser,
  } = useLogIn(navigation);

  return (
    <LogInStyle.Container>
      <LogInStyle.Label>{STRINGS.LOGIN.email_title}</LogInStyle.Label>
      <LogInStyle.Input value={email} onChangeText={setEmail} />
      {!isValidEmail && (
        <LogInStyle.Error>{STRINGS.LOGIN.error_email}</LogInStyle.Error>
      )}

      <LogInStyle.Label>{STRINGS.LOGIN.password_title}</LogInStyle.Label>
      <LogInStyle.Input
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {!isValidPassword && (
        <LogInStyle.Error>{STRINGS.LOGIN.error_password}</LogInStyle.Error>
      )}

      <LogInStyle.Submit onPress={onLogIn}>
        <LogInStyle.SubmitText>
          {STRINGS.LOGIN.login_button}
        </LogInStyle.SubmitText>
      </LogInStyle.Submit>

      {isExist && (
        <LogInStyle.Error>
          {STRINGS.LOGIN.error_already_create}
        </LogInStyle.Error>
      )}
      {isNotFoundUser && (
        <LogInStyle.Error>
          {STRINGS.LOGIN.error_user_not_found}
        </LogInStyle.Error>
      )}
      <LogInStyle.Submit onPress={onCreate}>
        <LogInStyle.SubmitText>
          {STRINGS.LOGIN.create_button}
        </LogInStyle.SubmitText>
      </LogInStyle.Submit>

      {isError && <LogInStyle.Error>"ERROR"</LogInStyle.Error>}
    </LogInStyle.Container>
  );
};
