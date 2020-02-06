import * as React from 'react';

import { ErrorTextStyle } from './error-text.style';

interface IErrorText {
  errorText: string;
  isError: boolean;
  color?: string;
  children?: React.ReactNode;
}

export const ErrorText: React.FC<IErrorText> = (props) => {
  const { errorText, isError, color } = props;

  return (
    <ErrorTextStyle.Container>
      {isError && (
        <ErrorTextStyle.ErrorText color={color}>
          {errorText}
        </ErrorTextStyle.ErrorText>
      )}
    </ErrorTextStyle.Container>
  );
};
