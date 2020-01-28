import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { Label, Input, ErrorText } from './field.style';

export interface IAuntFieldProps {
  nameField: string;
  labelText: string;
  required?: boolean;
  isHideError?: boolean;
  children?: ReactNode;
}

// TODO: rename
export const Field = ({
  nameField,
  labelText,
  isHideError,
  required,
}: IAuntFieldProps) => {
  const { register, setValue, errors, watch } = useFormContext();
  const { [nameField]: value } = watch();
  const reg = () => register({ name: nameField }, { required });
  const updateValue = (text: string) => setValue(nameField, text);
  // todo always false
  const isError: boolean = !!isHideError && !!errors[nameField];

  return (
    <>
      <Label>{labelText}</Label>
      <Input ref={reg} onChangeText={updateValue} value={value} />
      {isError && <ErrorText>This is required.</ErrorText>}
    </>
  );
};
