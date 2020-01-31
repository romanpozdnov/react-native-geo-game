import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Map } from './screens/map';
import { LogIn } from './screens/login';

import { ROUTES } from './constants/routes';

const AppNavigator = createStackNavigator({
  //[ROUTES.Map]: Map,
  [ROUTES.Log]: LogIn,
});

export const App = createAppContainer(AppNavigator);
