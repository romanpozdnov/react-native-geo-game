import * as React from 'react';
import { LatLng, Region } from 'react-native-maps';
import { NavigationInjectedProps } from 'react-navigation';

import { useCreteItem } from './create-item.state';
import { createItem } from './create-item.api';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/string';

import { CreateItemStyle } from './create-item.style';

interface ICreateItemProps extends NavigationInjectedProps {
  children?: React.ReactNode;
}

export const CreateItem: React.FC<ICreateItemProps> = (props) => {
  const { navigation } = props;
  const {
    idUser,
    isValidName,
    region,
    itemCoordinates,
    name,
    setName,
    setUserRegion,
    setRegion,
    userCoordinates,
    setValidName,
  } = useCreteItem();

  const onSubmit = () => {
    if (isValidName) {
      const item: IItemField = {
        coordinates: itemCoordinates,
        name,
        idUser,
        isFound: false,
      };
      createItem(item);
      navigation.navigate(ROUTES.ItemList);
    }
  };

  const handleChange = (text: string) => {
    setName(text);
    console.log(text);
    setValidName();
  };

  const handleRegionChange = (region: Region) => {
    setRegion(region);
  };

  return (
    <CreateItemStyle.Container>
      <CreateItemStyle.Label>
        {STRINGS.CREATE_ITEM.item_name_title}
      </CreateItemStyle.Label>
      <CreateItemStyle.Input onChangeText={handleChange} />
      {isValidName && (
        <CreateItemStyle.Error>
          {STRINGS.CREATE_ITEM.item_error_text}
        </CreateItemStyle.Error>
      )}
      <CreateItemStyle.Map region={region} onRegionChange={handleRegionChange}>
        <CreateItemStyle.Marker coordinate={userCoordinates} />
      </CreateItemStyle.Map>
      <CreateItemStyle.Button
        title={STRINGS.CREATE_ITEM.submit_button}
        onPress={onSubmit}
      />
      <CreateItemStyle.Button
        title={STRINGS.CREATE_ITEM.to_user_move_button_text}
        onPress={setUserRegion}
      />
    </CreateItemStyle.Container>
  );
};
