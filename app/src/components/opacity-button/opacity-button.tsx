import * as React from 'react';

import { OpacityButtonStyle } from './opacity-button.style';

interface IOpacityButtonProps {
  text: string;
  handleClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
  isRound?: boolean;
}

export const OpacityButton: React.FC<IOpacityButtonProps> = (props) => {
  const {
    handleClick,
    text,
    backgroundColor,
    textColor,
    borderColor,
    isRound,
  } = props;

  return (
    <OpacityButtonStyle.Button
      onPress={handleClick}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      isRound={isRound}
    >
      <OpacityButtonStyle.Text color={textColor}>
        {text}
      </OpacityButtonStyle.Text>
    </OpacityButtonStyle.Button>
  );
};
