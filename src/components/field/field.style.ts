import styled from 'styled-components/native';
import { COLORS } from '@constants/color';

const Label = styled.Text`
  color: ${COLORS.text_color};
  font-size: 18px;
  font-weight: bold;
`;

export const FieldStyle = {
  Container: styled.View``,
  TextInput: styled.TextInput`
    border-bottom-color: ${COLORS.text_color};
    border-bottom-width: 2px;
    width: 100%;
  `,
  Label,
  Error: styled(Label)`
    color: ${COLORS.LOGIN.error_text};
  `,
};
