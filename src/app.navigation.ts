import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Map } from './screens/map';

import { ROUTES } from './constants/routes';

const AppNavigator = createStackNavigator({
  [ROUTES.Map]: Map,
});

export const App = createAppContainer(AppNavigator);
