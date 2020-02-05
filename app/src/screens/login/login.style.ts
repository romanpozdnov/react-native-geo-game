import styled from 'styled-components/native';

import { COLORS } from '@constants/color';
const Label = styled.Text`
  color: ${COLORS.text_color};
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
`;
export const LogInStyle = {
  Container: styled.View`
    flex: 1;
    position: relative;
  `,
  Submit: styled.TouchableOpacity`
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.LOGIN.create_button_background};
  `,
  SubmitText: styled.Text``,

  Input: styled.TextInput`
    border-bottom-color: ${COLORS.text_color};
    border-bottom-width: 2px;
    margin: 10px;
    width: 100%;
  `,
  Label,
  Error: styled(Label)`
    color: ${COLORS.LOGIN.error_text};
    text-align: center;
  `,
};
