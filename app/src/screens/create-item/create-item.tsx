import * as React from 'react';
import { Region } from 'react-native-maps';
import { NavigationInjectedProps } from 'react-navigation';

import { useCreteItem } from './create-item.state';

import { STRINGS } from '@constants/string';

import { CreateItemStyle } from './create-item.style';

interface ICreateItemProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const CreateItem: React.FC<ICreateItemProps> = (props) => {
  const { navigation } = props;
  const {
    isValidName,
    region,
    setName,
    setUserRegion,
    setRegion,
    userCoordinates,
    onSubmit,
    setAddress,
  } = useCreteItem();

  const handleChange = (text: string) => setName(text);
  const handleRegionChange = (region: Region) => setRegion(region);

  return (
    <CreateItemStyle.Container>
      <CreateItemStyle.Label>
        {STRINGS.CREATE_ITEM.item_name_title}
      </CreateItemStyle.Label>
      <CreateItemStyle.Input onChangeText={handleChange} />
      {!isValidName && (
        <CreateItemStyle.Error>
          {STRINGS.CREATE_ITEM.item_error_text}
        </CreateItemStyle.Error>
      )}
      <CreateItemStyle.Map
        initialRegion={region}
        onRegionChange={handleRegionChange}
      >
        <CreateItemStyle.Marker coordinate={userCoordinates} />
      </CreateItemStyle.Map>
      <CreateItemStyle.Button
        title={STRINGS.CREATE_ITEM.submit_button}
        onPress={() => onSubmit(navigation)}
      />
      <CreateItemStyle.Button
        title={STRINGS.CREATE_ITEM.get_address_button}
        onPress={setAddress}
      />
      <CreateItemStyle.Button
        title={STRINGS.CREATE_ITEM.to_user_move_button_text}
        onPress={setUserRegion}
      />
    </CreateItemStyle.Container>
  );
};