import styled from 'styled-components/native';

export const LoginPageStyle = {
  Container: styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Submit: styled.Button`
    padding: 8px 16px;
  `,
  ButtonBar: styled.View`
    margin-top: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
};
