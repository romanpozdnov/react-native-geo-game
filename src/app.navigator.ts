import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginPage } from './screens/login-page';
import { ItemsPage } from './screens/items-page/items-page';
import { MapPage } from './screens/map-page/map-page';

import { ROUTES } from './constants/routes';

const AppNavigator = createStackNavigator(
  {
    [ROUTES.LoginPage]: LoginPage,
    [ROUTES.ItemsPage]: ItemsPage,
    [ROUTES.MapPage]: MapPage,
  },
  {
    initialRouteName: ROUTES.LoginPage,
  }
);

export const App = createAppContainer(AppNavigator);
