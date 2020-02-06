import * as React from 'react';

import { ErrorText } from '@components/error-text';

import { FieldStyle } from './field.style';

interface IField {
  value: string;
  text: string;
  errorText: string;
  setValue: (value: string) => void;
  isValid: boolean;
  children?: React.ReactNode;
  isSecure?: boolean;
}

export const Field: React.FC<IField> = (props) => {
  const { setValue, text, isValid, value, errorText, isSecure } = props;

  return (
    <FieldStyle.Container>
      <FieldStyle.Label>{text}</FieldStyle.Label>
      <FieldStyle.Field
        value={value}
        onChangeText={setValue}
        secureTextEntry={isSecure}
      />
      <ErrorText errorText={errorText} isError={!isValid} />
    </FieldStyle.Container>
  );
};
