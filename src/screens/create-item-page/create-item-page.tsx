import React, { FC, ReactNode } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Button } from 'react-native';
import { Field } from '@components/field';

import { IItem } from '@constants/types';

import { STRINGS } from '@constants/strings';
import { CRETE_ITEM_FIELD } from './create-item-page.constant';

import { FullPageView } from '@components/style';

interface ICreateItemPage {
  children?: ReactNode;
}

export const CreateItemPage: FC<ICreateItemPage> = ({}) => {
  // TODO handlSubmite
  // TODO reset
  // TODO send item to server
  const formMethods = useForm<IItem>();
  const { handleSubmit, setValue, watch } = formMethods;
  const { isFound, coordinates, name } = watch();

  const onReset = () => {
    setValue(CRETE_ITEM_FIELD.name, '');
    //setValue(CRETE_ITEM_FIELD.itemCoordinate, DEFAULT_USER_COORDINATE);
    //setValue(CRETE_ITEM_FIELD.isFound, true);
  };

  return (
    <FullPageView>
      <FormContext {...formMethods}>
        <Field
          labelText={STRINGS.CREATE_ITEM_PAGE.item_name_field}
          nameField={CRETE_ITEM_FIELD.name}
          required
        />
        <Button
          title={STRINGS.CREATE_ITEM_PAGE.submit_button_text}
          onPress={onReset}
        />
      </FormContext>
    </FullPageView>
  );
};
