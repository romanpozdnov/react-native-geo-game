import { LatLng } from 'react-native-maps';

// TODO refactore
export interface IItem {
  name: string;
  itemCoordinate: LatLng;
  isFound: boolean;
}

export type TItemFieldName = keyof IItem;
