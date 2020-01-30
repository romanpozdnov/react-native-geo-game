import styled, { css } from 'styled-components/native';
import { COLORS } from '@constants/theme';

const textStyles = css`
  color: ${COLORS.text_color};
  font-size: 16px;
  margin: 16px 0;
`;

export const FieldStyle = {
  Label: styled.Text`
    ${textStyles}
  `,
  Input: styled.TextInput`
    min-width: 50%;
    padding: 4px;
    border-bottom-color: ${COLORS.text_color};
    border-bottom-width: 2px;
  `,
  ErrorText: styled.Text`
    ${textStyles}
    color: ${COLORS.error_color};
  `,
};
