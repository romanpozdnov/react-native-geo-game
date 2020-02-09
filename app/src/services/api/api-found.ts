import Axios from 'axios';
import { URL, REQUEST, CONFIG } from './api.constants';

export class FoundAPI {
  constructor() {}

  static async getAll(): Promise<IFound[]> {
    const url = URL.found;
    return (await Axios.get(url)).data;
  }

  static async getById(id: string): Promise<IFound> {
    const url = REQUEST.found_by_id(URL.found, id);
    return (await Axios.get(url)).data;
  }

  static async getByUserId(idUser: string): Promise<IFound> {
    const url = REQUEST.found_by_user_id(URL.found, idUser);
    return (await Axios.get(url)).data;
  }

  static async getAllByItemId(idItem: string): Promise<IFound[]> {
    const url = REQUEST.found_by_item_id(URL.found, idItem);
    return (await Axios.get(url)).data;
  }

  static async createFound(foundField: IFoundField): Promise<IFound> {
    const url = URL.found;
    return (await Axios.post(url, foundField, CONFIG)).data;
  }

  static async updateById(id: string, found: IFoundField): Promise<IFound> {
    const url = REQUEST.by_id(URL.found, id);
    return (await Axios.put(url, found, CONFIG)).data;
  }

  static async removeById(id: string): Promise<IFound> {
    const url = REQUEST.by_id(URL.found, id);
    return (await Axios.delete(url)).data;
  }
}
