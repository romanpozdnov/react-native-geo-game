import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { Label, Input, ErrorText } from './field.style';

export interface IAuntFieldProps<T> {
  nameField: T;
  labelText: string;
  required?: boolean;
  isHideError?: boolean;
  children?: ReactNode;
}

export const Field = <T extends string>({
  nameField,
  labelText,
  isHideError,
  required,
}: IAuntFieldProps<T>) => {
  const { register, setValue, errors, watch } = useFormContext();
  const { [nameField]: value } = watch();
  const reg = () => register({ name: nameField }, { required });
  const updateValue = (text: string) => setValue(nameField, text);

  const isError: boolean = !!isHideError && !!errors[nameField];

  return (
    <>
      <Label>{labelText}</Label>
      <Input ref={reg} onChangeText={updateValue} value={value} />
      {isError && <ErrorText>This is required.</ErrorText>}
    </>
  );
};
