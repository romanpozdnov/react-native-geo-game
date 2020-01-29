import styled from 'styled-components/native';

export const Title = styled.Text`
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const Container = styled.View`
  position: relative;
`;

export const AbsoluteView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FullPageView = styled.View`
  flex: 1;
`;
