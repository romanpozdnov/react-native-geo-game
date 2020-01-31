import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import { Map } from './screens/map';
import { LogIn } from './screens/login';
import { ItemList } from './screens/item-list';

import { ROUTES } from './constants/routes';
import { ASYNC_FIELD } from '@constants/async-storage';

AsyncStorage.setItem(ASYNC_FIELD.user_id, '1');

const AppNavigator = createStackNavigator({
  //[ROUTES.Map]: Map,
  //[ROUTES.Log]: LogIn,
  [ROUTES.List]: ItemList,
});

export const App = createAppContainer(AppNavigator);
