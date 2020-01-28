import React, { FC, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Khabar } from './khabar';

import { EXAMPLE_LIST_KHABARS } from './khabar-page.const';

import { IKhabarProps } from './khabar';

export interface IKhabarPageProps {}

export const KhabarPage: FC<IKhabarPageProps> = ({}) => {
  const [khabarList, setKhabarList] = useState<IKhabarProps[]>([]);

  useEffect(() => {
    setKhabarList(EXAMPLE_LIST_KHABARS);
  }, []);

  const KhabarList = khabarList.map((data, index) => (
    <Khabar key={index} {...data} />
  ));

  return (
    <View>
      <Text>Khabar </Text>
      {KhabarList}
    </View>
  );
};
