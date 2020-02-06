import { ReactNode } from 'react';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
  NavigationInjectedProps,
} from 'react-navigation';

export type TNavigator = NavigationScreenProp<
  NavigationRoute<NavigationParams>,
  NavigationParams
>;

export type TPageNavigation = NavigationInjectedProps & {
  children?: ReactNode;
};
