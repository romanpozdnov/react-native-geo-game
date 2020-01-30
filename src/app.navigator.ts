import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginPage } from './screens/login-page';
import { ItemsPage } from './screens/items-page/items-page';
import { MapPage } from './screens/map-page/map-page';
import { CreateItemPage } from './screens/create-item-page';

import { ROUTES } from './constants/routes';

const AppNavigator = createStackNavigator(
  {
    [ROUTES.LoginPage]: LoginPage,
    [ROUTES.ItemsPage]: ItemsPage,
    [ROUTES.MapPage]: MapPage,
    [ROUTES.CreateItemPage]: CreateItemPage,
  },
  {
    initialRouteName: ROUTES.LoginPage,
  }
);

export const App = createAppContainer(AppNavigator);
