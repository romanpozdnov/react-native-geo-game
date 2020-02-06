import * as React from 'react';

import { OpacityButtonStyle } from './opacity-button.style';

interface IOpacityButtonProps {
  text: string;
  handleClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}

export const OpacityButton: React.FC<IOpacityButtonProps> = (props) => {
  const { handleClick, text, backgroundColor, textColor } = props;

  return (
    <OpacityButtonStyle.Button
      onPress={handleClick}
      backgroundColor={backgroundColor}
    >
      <OpacityButtonStyle.Text color={textColor}>
        {text}
      </OpacityButtonStyle.Text>
    </OpacityButtonStyle.Button>
  );
};
