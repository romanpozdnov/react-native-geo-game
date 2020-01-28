import React, { FC, ReactNode } from 'react';
import { Label, Input, ErrorText } from './login-field.style';
import { TFieldName } from '../login';
import { useFormContext } from 'react-hook-form';

export interface IAuntFieldProps {
  nameField: TFieldName;
  labelText: string;
  isRequired?: boolean;
  isShowErrorText?: boolean;
  children?: ReactNode;
}

export const AuntField: FC<IAuntFieldProps> = ({
  nameField,
  labelText,
  isRequired = true,
  isShowErrorText = true,
}) => {
  const { register, setValue, errors, watch } = useFormContext();
  const { [nameField]: value } = watch();
  const reg = () => register({ name: nameField }, { required: isRequired });
  const updateValue = (text: string) => setValue(nameField, text);
  const isError: boolean = isShowErrorText && errors[nameField] === undefined;

  return (
    <>
      <Label>{labelText}</Label>
      <Input ref={reg} onChangeText={updateValue} value={value} />
      {isError && <ErrorText>This is required.</ErrorText>}
    </>
  );
};
