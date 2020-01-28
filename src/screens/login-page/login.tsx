import React, { FC, ReactNode } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { NavigationInjectedProps } from 'react-navigation';

import { AuntField } from './login-field/login-field';

import { Container, Submit, ButtonBar } from './login.style';
import { ROUTES } from 'constants/routes';

export interface ILoginPageProps extends NavigationInjectedProps {
  children?: ReactNode;
}
// * Field name
export type TFieldName = 'email' | 'password';
// * react-hook-form data
export type TSubmitFormData = Record<TFieldName, string>;

const LOGIN_FIELDS: IHashMap<TFieldName> = {
  email: 'email',
  password: 'password',
};

export const LoginPage: FC<ILoginPageProps> = ({ navigation }) => {
  const formMethods = useForm<TSubmitFormData>();
  const { handleSubmit, setValue } = formMethods;
  const onReset = () => {
    setValue(LOGIN_FIELDS.password, '');
    setValue(LOGIN_FIELDS.email, '');
  };

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
    // * Navigate to data page
    navigation.navigate(ROUTES.KhabarPage);
  });

  return (
    <Container>
      <FormContext {...formMethods}>
        <AuntField nameField={LOGIN_FIELDS.email} labelText="E-mail" />
        <AuntField nameField={LOGIN_FIELDS.password} labelText="Password" />
        <ButtonBar>
          <Submit title="Submit" onPress={onSubmit} />
          <Submit title="Clean" onPress={onReset} />
        </ButtonBar>
      </FormContext>
    </Container>
  );
};
