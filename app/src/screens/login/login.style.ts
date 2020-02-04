import styled from 'styled-components/native';

import { COLORS } from '@constants/color';

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
};
