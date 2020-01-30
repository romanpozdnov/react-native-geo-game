import { LatLng } from 'react-native-maps';

// TODO refactore
export interface IItem {
  name: string;
  coordinates: LatLng;
  isFound: boolean;
}

export type TItemFieldName = keyof IItem;
