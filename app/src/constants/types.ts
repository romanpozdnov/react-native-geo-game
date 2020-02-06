import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

export type TNavigator = NavigationScreenProp<
  NavigationRoute<NavigationParams>,
  NavigationParams
>;
