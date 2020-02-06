import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

export const ErrorTextStyle = {
  Container: styled.View``,
  ErrorText: styled.Text<{ color?: string }>`
    color: ${(props) => props.color ?? COLORS.error_color};
  `,
};
