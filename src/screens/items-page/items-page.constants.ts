import { IItem } from '@constants/types';

export const ICONS_SIZE: number = 25;

export const EXAMPLE_LIST_ITEMS: IItem[] = [
  {
    coordinates: {
      latitude: 50.005702,
      longitude: 36.229222,
    },
    name: 'In window',
    isFound: false,
  },
  {
    coordinates: {
      latitude: 50.007795,
      longitude: 36.224676,
    },
    name: 'In blue box',
    isFound: false,
  },
  {
    coordinates: {
      latitude: 50.002928,
      longitude: 36.224924,
    },
    name: 'Between three tree',
    isFound: true,
  },
  {
    coordinates: {
      latitude: 49.994489,
      longitude: 36.230638,
    },
    name: 'Under yellow door',
    isFound: true,
  },
  {
    coordinates: {
      latitude: 49.997526,
      longitude: 36.241674,
    },
    name: 'Car',
    isFound: false,
  },
];
