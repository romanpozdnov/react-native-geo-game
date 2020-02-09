import Axios from 'axios';
import { URL, REQUEST, CONFIG } from './api.constants';

export class ItemAPI {
  constructor() {}

  static async getAll(): Promise<IItem[]> {
    const url = URL.item;
    return (await Axios.get(url)).data;
  }

  static async getById(id: string): Promise<IItem> {
    const url = REQUEST.found_by_id(URL.item, id);
    return (await Axios.get(url)).data;
  }

  static async getAllByUserId(idUser: string): Promise<IItem[]> {
    const url = REQUEST.found_by_user_id(URL.item, idUser);
    return (await Axios.get(url)).data;
  }

  static async getItemByIdList(ids: string[]): Promise<IItem[]> {
    const url = REQUEST.user_found_item;
    return (await Axios.post(url, ids, CONFIG)).data;
  }

  static async createItem(itemField: IItemField): Promise<IItem> {
    const url = URL.item;
    return (await Axios.post(url, itemField, CONFIG)).data;
  }

  static async updateById(id: string, item: IItemField): Promise<IItem> {
    const url = REQUEST.by_id(URL.item, id);
    return (await Axios.put(url, item, CONFIG)).data;
  }

  static async removeById(id: string): Promise<IItem> {
    const url = REQUEST.by_id(URL.item, id);
    return (await Axios.delete(url)).data;
  }
}
