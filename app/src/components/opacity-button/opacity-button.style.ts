import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

interface IButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  isRound?: boolean;
}
interface ITextProps {
  color?: string;
}

export const OpacityButtonStyle = {
  Button: styled.TouchableOpacity<IButtonProps>`
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 5px;
    border: 2px solid ${(props) => props.borderColor ?? COLORS.border_color};
    border-radius: ${(props) => (props.isRound ? '20px' : '0px')};
    background-color: ${(props) =>
      props.backgroundColor ?? COLORS.background_color};
  `,
  Text: styled.Text<ITextProps>`
    color: ${(props) => props.color ?? COLORS.text_color};
  `,
};
