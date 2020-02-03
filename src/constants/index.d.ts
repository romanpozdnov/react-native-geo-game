interface IUserField {
  email: string;
  password: string;
}
interface IUserData extends IUserField {
  id: string;
}

interface IItemField {
  name: string;
  idUser: string;
  isFound: boolean;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
interface IItem extends IItemField {
  id: string;
}
