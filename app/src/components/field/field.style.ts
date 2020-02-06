import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

const Label = styled.Text`
  font-size: 16px;
  color: ${COLORS.text_color};
  padding: 4px;
  background-color: ${COLORS.background_color};
`;

export const FieldStyle = {
  Container: styled.View`
    padding: 4px;
    margin-bottom: 4px;
  `,
  Label,
  Error: styled(Label)`
    color: ${COLORS.error_color};
  `,
  Field: styled.TextInput`
    margin-top: 4px;
    border-bottom-color: ${COLORS.text_color};
    border-bottom-width: 2px;
  `,
};
