import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Map } from './screens/map';
import { LogIn } from './screens/login';
import { ItemList } from './screens/item-list';
import { CreateItem } from './screens/create-item';

import { ROUTES } from './constants/routes';

import '@services/createStorage';
import '@services/geocoder';

const AppNavigator = createStackNavigator(
  {
    [ROUTES.Create]: CreateItem,
    [ROUTES.Log]: LogIn,
    [ROUTES.ItemList]: ItemList,
    [ROUTES.Map]: Map,
  },
  {
    initialRouteName: ROUTES.ItemList,
  }
);

export const App = createAppContainer(AppNavigator);
