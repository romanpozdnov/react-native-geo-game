import styled from 'styled-components/native';

const Label = styled.Text`
  color: ${COLORS.text_color};
  font-size: 18px;
  font-weight: bold;
`;

export const LogInStyle = {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  TextInput: styled.TextInput`
    border-bottom-color: ${COLORS.text_color};
    border-bottom-width: 2;
  `,
  Label,
  Error: styled(Label)`
    color: ${COLORS.LOGIN.error_text};
  `,
};
