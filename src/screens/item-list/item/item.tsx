import * as React from 'react';

import { FontAwesomeIcon } from '@components/icon';

import { COLORS } from '@constants/color';

import { ItemStyle } from './item.style';

interface IItemProps {
  itemParameter: IItem;
  navigateToMap: () => void;
}

export const Item: React.FC<IItemProps> = (props) => {
  const { itemParameter, navigateToMap } = props;
  const { isFound, name } = itemParameter;
  return (
    <ItemStyle.Container>
      <ItemStyle.Title title={name} onPress={navigateToMap} />
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
