import * as React from 'react';
import { useForm, FormContext } from 'react-hook-form';

import { Field } from '@components/field';

import { FIELD_NAME } from './login.constant';
import { STRINGS } from '@constants/string';

import { NavigationInjectedProps } from 'react-navigation';

import { LogInStyle } from './login.style';
import { ROUTES } from '@constants/routes';

interface ILogInProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const LogIn: React.FC<ILogInProps> = ({ navigation }) => {
  const form = useForm<IUserField>();
  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data: IUserField) => {
    console.log(data);
    navigation.navigate(ROUTES.ItemList);
  });

  return (
    <LogInStyle.Container>
      <FormContext {...form}>
        <Field
          name={FIELD_NAME.email}
          title={STRINGS.LOGIN.email_field_title}
          errorText={STRINGS.LOGIN.email_error_text}
          required
        />
        <Field
          name={FIELD_NAME.password}
          title={STRINGS.LOGIN.password_field_title}
          errorText={STRINGS.LOGIN.password_error_text}
          required
        />

        <LogInStyle.Submit
          title={STRINGS.LOGIN.submit_button}
          onPress={onSubmit}
        />
      </FormContext>
    </LogInStyle.Container>
  );
};
