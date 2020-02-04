import * as React from 'react';

import { IIconProps, FontAwesomeIcon } from '../icon';

import { IconButtonStyle } from './icon-button.style';

interface IIconButton {
  iconProps: IIconProps;
  handleClick: () => void;
  text?: string;
  children?: React.ReactNode;
}

export const IconButton: React.FC<IIconButton> = (props) => {
  const { handleClick, iconProps, text } = props;
  return (
    <IconButtonStyle.Container onPress={handleClick}>
      <IconButtonStyle.Wrapper>
        {text && <IconButtonStyle.Text>{text}</IconButtonStyle.Text>}
        <FontAwesomeIcon {...iconProps} />
      </IconButtonStyle.Wrapper>
    </IconButtonStyle.Container>
  );
};
