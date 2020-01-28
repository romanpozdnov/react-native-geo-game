import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginPage } from './screens/login-page';
import { KhabarPage } from './screens/khabar-page';

import { ROUTES } from './constants/routes';

const AppNavigator = createStackNavigator(
  {
    [ROUTES.LoginPage]: LoginPage,
    [ROUTES.KhabarPage]: KhabarPage,
  },
  {
    initialRouteName: ROUTES.LoginPage,
  }
);

export const App = createAppContainer(AppNavigator);
