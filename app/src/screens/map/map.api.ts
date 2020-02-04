import { Storage } from '@services/createStorage';

export const fetchItemCoordinates = async () =>
  await Storage.getItemCoordinates();
