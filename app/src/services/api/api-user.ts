import Axios from 'axios';
import { URL, REQUEST, CONFIG } from './api.constants';

export class UserAPI {
  constructor() {}

  static async getAll(): Promise<IUser[]> {
    const url = URL.user;
    return (await Axios.get(url)).data;
  }

  static async getById(id: string): Promise<IUser> {
    const url = REQUEST.found_by_id(URL.user, id);
    return (await Axios.get(url)).data;
  }

  static async getByEmail(email: string): Promise<IUser> {
    const url = REQUEST.found_by_email(URL.user, email);
    return (await Axios.get(url)).data;
  }

  static async createUser(userField: IUserField): Promise<IUser> {
    const url = URL.user;
    return (await Axios.post(url, userField, CONFIG)).data;
  }

  static async updateById(id: string, user: IUserField): Promise<IUser> {
    const url = REQUEST.by_id(URL.user, id);
    return (await Axios.put(url, user, CONFIG)).data;
  }

  static async removeById(id: string): Promise<IUser> {
    const url = REQUEST.by_id(URL.user, id);
    return (await Axios.delete(url)).data;
  }
}
