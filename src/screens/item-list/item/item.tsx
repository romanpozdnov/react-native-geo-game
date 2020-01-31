import * as React from 'react';

import { FontAwesomeIcon } from '@components/icon';

import { COLORS } from '@constants/color';

import { ItemStyle } from './item.style';
import { LatLng } from 'react-native-maps';

interface IItemProps {
  itemParameter: IItem;
  navigateToMap: (coordinate: LatLng) => void;
}

export const Item: React.FC<IItemProps> = (props) => {
  const { itemParameter, navigateToMap } = props;
  const { isFound, name } = itemParameter;
  return (
    <ItemStyle.Wrapper onPress={navigateToMap(itemParameter.coordinates)}>
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
    </ItemStyle.Wrapper>
  );
};
