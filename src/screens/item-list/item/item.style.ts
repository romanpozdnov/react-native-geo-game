import styled from 'styled-components/native';

export const ItemStyle = {
  Wrapper: styled.TouchableHighlight`
    background-color: lightcyan;
    padding: 15px;
  `,
  Container: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
  `,
  Title: styled.Text`
    font-size: 24px;
    font-weight: bold;
  `,
};
