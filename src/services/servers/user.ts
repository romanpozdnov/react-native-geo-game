import { ASYNC_FIELD } from '@constants/async-storage';
import { getData } from '@services/async-storage';

export const getAllItems = async (): Promise<IItem[]> => await ITEMS;

export const getItemsByUserId = async (): Promise<IItem[]> => {
  const userID: string = await getData(ASYNC_FIELD.user_id, '');
  console.log(userID);
  return (await getAllItems()).filter((item) => userID == item.idUser);
};

export const ITEMS: IItem[] = [
  {
    id: '1',
    coordinates: {
      latitude: 37,
      longitude: 50,
    },
    idUser: '1',
    isFound: false,
    name: 'Car',
  },
  {
    id: '2',
    coordinates: {
      latitude: 37.5,
      longitude: 50,
    },
    idUser: '1',
    isFound: false,
    name: 'Man',
  },
  {
    id: '3',
    coordinates: {
      latitude: 36.5,
      longitude: 50,
    },
    idUser: '2',
    isFound: true,
    name: 'Woman',
  },
  {
    id: '4',
    coordinates: {
      latitude: 37.2,
      longitude: 50,
    },
    idUser: '2',
    isFound: false,
    name: 'Dog',
  },
];
