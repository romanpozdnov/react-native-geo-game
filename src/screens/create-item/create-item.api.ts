import AsyncStorage from '@react-native-community/async-storage';

import { ASYNC_STORAGE_FIELD } from '@constants/async-storage';

export const createItem = async (item: IItemField) => {
  console.log(item);
  await console.log('Item create');
};

export const fetchUserId = async () => {
  return await AsyncStorage.getItem(ASYNC_STORAGE_FIELD.user_id);
};
