import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

export const ErrorTextStyle = {
  Container: styled.View``,
  ErrorText: styled.Text<{ color?: string }>`
    text-align: center;
    margin: 5px;
    color: ${(props) => props.color ?? COLORS.error_color};
  `,
};
