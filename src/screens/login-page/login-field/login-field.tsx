import React, { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { TFieldName } from '../login';

import { Label, Input, ErrorText } from './login-field.style';

export interface IAuntFieldProps {
  nameField: TFieldName;
  labelText: string;
  required?: boolean;
  isShowErrorText?: boolean;
  isHideError?: boolean;
  children?: ReactNode;
}

// TODO: rename
export const AuntField: FC<IAuntFieldProps> = ({
  nameField,
  labelText,
  required = true,
  isShowErrorText = true,
}) => {
  const { register, setValue, errors, watch } = useFormContext();
  const { [nameField]: value } = watch();
  const reg = () => register({ name: nameField }, { required });
  const updateValue = (text: string) => setValue(nameField, text);
  // todo always false
  const isError: boolean = isShowErrorText && errors[nameField] === undefined;

  return (
    <>
      <Label>{labelText}</Label>
      <Input ref={reg} onChangeText={updateValue} value={value} />
      {isError && <ErrorText>This is required.</ErrorText>}
    </>
  );
};
