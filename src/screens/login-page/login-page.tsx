import React, { FC, ReactNode } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { NavigationInjectedProps } from 'react-navigation';

import { Field } from '@components/field';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { LOGIN_FIELDS } from './login-page.constants';

import { TSubmitFormData } from './login-page.type';

import { Container, Submit, ButtonBar } from './login-page.style';

export interface ILoginPageProps extends NavigationInjectedProps {
  children?: ReactNode;
}

export const LoginPage: FC<ILoginPageProps> = ({ navigation }) => {
  const formMethods = useForm<TSubmitFormData>();
  const { handleSubmit, setValue } = formMethods;

  const onReset = () => {
    setValue(LOGIN_FIELDS.password, '');
    setValue(LOGIN_FIELDS.email, '');
  };

  const onSubmit = handleSubmit((formData) => {
    navigation.navigate(ROUTES.ItemsPage);
  });

  return (
    <Container>
      <FormContext {...formMethods}>
        <Field
          nameField={LOGIN_FIELDS.email}
          labelText={STRINGS.LOGIN_PAGE.email_field}
          isShowError={false}
          required
        />
        <Field
          nameField={LOGIN_FIELDS.password}
          labelText={STRINGS.LOGIN_PAGE.password_field}
          isShowError={true}
          required
        />
        <ButtonBar>
          <Submit title={STRINGS.LOGIN_PAGE.submit_button} onPress={onSubmit} />
          <Submit title={STRINGS.LOGIN_PAGE.clean_button} onPress={onReset} />
        </ButtonBar>
      </FormContext>
    </Container>
  );
};
