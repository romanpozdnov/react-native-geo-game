import { ItemStyle } from './item.style';
import * as React from 'react';

interface IItemProps {
  itemParameter: IItem;
}

export const Item: React.FC<IItemProps> = (props) => {
  const { itemParameter } = props;
  const { isFound, name } = itemParameter;
  return (
    <ItemStyle.Container>
      <ItemStyle.Title>{name}</ItemStyle.Title>
    </ItemStyle.Container>
  );
};
