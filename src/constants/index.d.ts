interface IUserField {
  email: string;
  password: string;
}
interface IUserData extends IUserField {
  id: string;
}
interface IItem {
  id: string;
  name: string;
  idUser: string;
  isFound: boolean;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
