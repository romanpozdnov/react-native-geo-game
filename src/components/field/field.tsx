import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

// TODO: create styled object
import { FieldStyle } from './field.style';

// TODO: remove aunt
export interface IAuntFieldProps {
  nameField: string;
  labelText: string;
  required?: boolean;
  isShowError?: boolean;
  children?: ReactNode;
}

export const Field = ({
  nameField,
  labelText,
  isShowError,
  required,
}: IAuntFieldProps) => {
  const { register, setValue, errors, watch } = useFormContext();
  const { [nameField]: value } = watch();
  const reg = () => register({ name: nameField }, { required });
  const updateValue = (text: string) => setValue(nameField, text);

  const isError: boolean = !!isShowError && !!errors[nameField];

  return (
    <>
      <FieldStyle.Label>{labelText}</FieldStyle.Label>
      <FieldStyle.Input ref={reg} onChangeText={updateValue} value={value} />
      {isError && (
        <FieldStyle.ErrorText>This is required.</FieldStyle.ErrorText>
      )}
    </>
  );
};
