import { COLORS } from './../../../constants/theme';
import styled from 'styled-components/native';

export const Map = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const KhabarContainer = styled.View`
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-color: ${COLORS.text_color};
`;

export const KhabarName = styled.Button``;
