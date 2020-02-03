import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import { Map } from './screens/map';
import { LogIn } from './screens/login';
import { ItemList } from './screens/item-list';
import { CreateItem } from './screens/create-item';

import { ROUTES } from './constants/routes';
import { ASYNC_STORAGE_FIELD } from './constants/async-storage';

AsyncStorage.setItem(ASYNC_STORAGE_FIELD.user_id, '1');

const AppNavigator = createStackNavigator(
  {
    [ROUTES.Create]: CreateItem,
    [ROUTES.Log]: LogIn,
    [ROUTES.ItemList]: ItemList,
    [ROUTES.Map]: Map,
  },
  {
    initialRouteName: ROUTES.Create,
  }
);

export const App = createAppContainer(AppNavigator);
