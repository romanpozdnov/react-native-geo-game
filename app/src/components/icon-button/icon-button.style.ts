import styled from 'styled-components/native';

export const IconButtonStyle = {
  Container: styled.TouchableOpacity`
    padding: 5px;
    margin-bottom: 5px;
  `,
  Wrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Text: styled.Text`
    font-size: 18px;
  `,
};
