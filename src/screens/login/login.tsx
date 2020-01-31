import * as React from 'react';
import { useForm, FormContext } from 'react-hook-form';

import { Field } from '@components/field';

import { IUserField } from '@services/server/userData.type';

import { FIELD_NAME } from './login.constant';
import { STRINGS } from '@constants/string';

import { LogInStyle } from './login.style';

interface ILogInProps {}

export const LogIn: React.FC<ILogInProps> = ({}) => {
  const form = useForm<IUserField>();
  const { handleSubmit } = form;

  const onSubmit = handleSubmit((data: IUserField) => {
    console.log(data);
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
