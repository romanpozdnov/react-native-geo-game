import * as React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { FieldStyle } from './field.style';

interface IField {
  name: string;
  title: string;
  required?: boolean;
  errorText?: string;
  validate?: (value: any) => boolean;
  children?: React.ReactNode;
}

const onChange = (args: any) => ({
  value: args[0].nativeEvent.text,
});

export const Field: React.FC<IField> = (props) => {
  const { name, title, validate, required, errorText } = props;
  const { errors, control } = useFormContext();

  const isError = errors[name] && required;
  return (
    <FieldStyle.Container>
      <FieldStyle.Label>{title}</FieldStyle.Label>
      <Controller
        control={control}
        as={<FieldStyle.TextInput />}
        onChange={onChange}
        name={name}
        defaultValue=""
        rule={{
          required,
          validate,
        }}
      />

      {isError && <FieldStyle.Error>{errorText}</FieldStyle.Error>}
    </FieldStyle.Container>
  );
};
