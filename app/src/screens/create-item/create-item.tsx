import * as React from 'react';

import { Field } from '@components/field';
import { OpacityButton } from '@components/opacity-button';
import { ErrorText } from '@components/error-text';

import { useCreteItem } from './create-item.state';

import { STRINGS } from '@constants/string';
import { COLORS } from '@constants/color';

import { TPageNavigation } from '@constants/types';

import { CreateItemStyle } from './create-item.style';

interface ICreateItemProps extends TPageNavigation {}

export const CreateItem: React.FC<ICreateItemProps> = (props) => {
  const { navigation } = props;
  const {
    isValidName,

    region,
    error,
    name,

    setName,
    setUserRegion,
    setRegion,
    userCoordinates,
    onSubmit,
    setAddress,
  } = useCreteItem(navigation);

  return (
    <CreateItemStyle.Container>
      <Field
        errorText={STRINGS.CREATE_ITEM.item_error_text}
        setValue={setName}
        text={STRINGS.CREATE_ITEM.item_title}
        isValid={isValidName}
        value={name}
      />

      <CreateItemStyle.Map initialRegion={region} onRegionChange={setRegion}>
        <CreateItemStyle.Marker
          title={STRINGS.CREATE_ITEM.marker_user}
          coordinate={userCoordinates}
        />
      </CreateItemStyle.Map>

      <OpacityButton
        text={STRINGS.CREATE_ITEM.button_submit}
        handleClick={onSubmit}
        backgroundColor={COLORS.CREATE_ITEM.submit_button}
      />
      <OpacityButton
        text={STRINGS.CREATE_ITEM.button_get_address}
        handleClick={setAddress}
        backgroundColor={COLORS.CREATE_ITEM.submit_button}
      />
      <OpacityButton
        text={STRINGS.CREATE_ITEM.button_to_user_move}
        handleClick={setUserRegion}
        backgroundColor={COLORS.CREATE_ITEM.submit_button}
      />

      <ErrorText isError={!!error} errorText={error} />
    </CreateItemStyle.Container>
  );
};
