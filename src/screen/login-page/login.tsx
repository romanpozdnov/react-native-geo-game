import React, { FC, ReactNode } from 'react';
import { Container, Submit, ButtonBar } from './login.style';
import { useForm, FormContext } from 'react-hook-form';
import { AuntField } from './login-field/login-field';

export interface ILoginPageProps {
  children?: ReactNode;
}
export type TFieldName = 'email' | 'password';
export type TSubmitFormData = Record<TFieldName, string>;

export const LoginPage: FC<ILoginPageProps> = ({}) => {
  const formMethods = useForm<TSubmitFormData>();
  const { handleSubmit, setValue } = formMethods;
  const reset = () => {
    setValue('password', '');
    setValue('email', '');
  };

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <Container>
      <FormContext {...formMethods}>
        <AuntField nameField="email" labelText="E-mail" />
        <AuntField nameField="password" labelText="Password" />
        <ButtonBar>
          <Submit title="Submit" onPress={onSubmit} />
          <Submit title="Clean" onPress={reset} />
        </ButtonBar>
      </FormContext>
    </Container>
  );
};
