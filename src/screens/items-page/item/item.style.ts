import styled from 'styled-components/native';
import { COLORS } from '@constants/theme';

export const ItemContainer = styled.View`
  position: relative;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-color: ${COLORS.text_color};

  padding: 8px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ItemName = styled.Button``;
