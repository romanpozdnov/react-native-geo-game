interface IUserField {
  email: string;
  password: string;
}
interface IUser extends IUserField {
  _id: string;
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
  _id: string;
}

interface IFoundField {
  idUser: string;
  itemsIdList: string[];
}
interface IFound extends IFoundField {
  _id: string;
}
