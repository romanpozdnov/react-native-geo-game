import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Map } from './screens/map';
import { LogIn } from './screens/login';
import { ItemList } from './screens/item-list';
import { CreateItem } from './screens/create-item';

import { ROUTES } from './constants/routes';

import '@services/createStorage';
import '@services/geocoder';

const AppNavigator = createStackNavigator({
  [ROUTES.ItemList]: ItemList,
  [ROUTES.Log]: LogIn,
  [ROUTES.Create]: CreateItem,
  [ROUTES.Map]: Map,
});

export const App = createAppContainer(AppNavigator);
