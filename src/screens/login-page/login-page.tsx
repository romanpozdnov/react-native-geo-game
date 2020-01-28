import React, { FC, ReactNode } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { NavigationInjectedProps } from 'react-navigation';

import { Field } from '../field';

import { ROUTES } from '../../constants/routes';
import { STRINGS } from '../../constants/strings';
import { LOGIN_FIELDS } from './login-page.const';

import { TSubmitFormData } from './login-page.type';

import { Container, Submit, ButtonBar } from './login-page.style';

export interface ILoginPageProps extends NavigationInjectedProps {
  children?: ReactNode;
}

export const LoginPage: FC<ILoginPageProps> = ({ navigation }) => {
  const formMethods = useForm<TSubmitFormData>();
  const { handleSubmit, setValue } = formMethods;

  // * Clean field
  const onReset = () => {
    setValue(LOGIN_FIELDS.password, '');
    setValue(LOGIN_FIELDS.email, '');
  };

  // * On send data
  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
    // * Navigate to data page
    navigation.navigate(ROUTES.KhabarPage);
  });

  return (
    <Container>
      <FormContext {...formMethods}>
        <Field
          nameField={LOGIN_FIELDS.email}
          labelText={STRINGS.login.email_field}
        />
        <Field
          nameField={LOGIN_FIELDS.password}
          labelText={STRINGS.login.password_field}
        />
        <ButtonBar>
          <Submit title={STRINGS.login.submit_button} onPress={onSubmit} />
          <Submit title={STRINGS.login.clean_button} onPress={onReset} />
        </ButtonBar>
      </FormContext>
    </Container>
  );
};
