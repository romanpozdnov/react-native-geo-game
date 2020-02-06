import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

interface IButtonProps {
  backgroundColor?: string;
}
interface ITextProps {
  color?: string;
}

export const OpacityButtonStyle = {
  Button: styled.TouchableOpacity<IButtonProps>`
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.backgroundColor ?? COLORS.background_color};
  `,
  Text: styled.Text<ITextProps>`
    color: ${(props) => props.color ?? COLORS.text_color};
  `,
};
