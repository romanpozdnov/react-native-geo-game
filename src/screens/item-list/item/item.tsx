import { ItemStyle } from './item.style';
import * as React from 'react';
import { FontAwesomeIcon } from '@components/icon';
import { COLORS } from '@constants/color';

interface IItemProps {
  itemParameter: IItem;
}

export const Item: React.FC<IItemProps> = (props) => {
  const { itemParameter } = props;
  const { isFound, name } = itemParameter;
  return (
    <ItemStyle.Container>
      <ItemStyle.Title>{name}</ItemStyle.Title>
      {isFound ? (
        <FontAwesomeIcon
          color={COLORS.ITEM.found_icon}
          name="check"
          size={15}
        />
      ) : (
        <FontAwesomeIcon
          color={COLORS.ITEM.not_found_icon}
          name="times"
          size={15}
        />
      )}
    </ItemStyle.Container>
  );
};
