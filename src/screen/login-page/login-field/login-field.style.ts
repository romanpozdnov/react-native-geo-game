import { COLORS } from '../../../constant/theme';
import styled from 'styled-components/native';

export const Label = styled.Text`
  color: ${COLORS.text_color};
  font-size: 16px;
  margin: 16px 0;
`;
export const Input = styled.TextInput`
  min-width: 50%;
  padding: 4px;
  border-bottom-color: ${COLORS.text_color};
  border-bottom-width: 2px;
`;
export const ErrorText = styled(Label)`
  color: ${COLORS.error_color};
`;
