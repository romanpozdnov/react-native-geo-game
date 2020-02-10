import { Document } from "mongoose";
import { Response } from "express";

import { ItemDTO } from "./item.dto";

export interface IItemField {
  name: string;
  idUser: string;
  isFound: boolean;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
export type IItem = IItemField & Document;

export interface IItemServices {
  findAll: () => Promise<IItem[]>;
  findById: (id: string) => Promise<IItem>;
  findAllByUserId: (idUser: string) => Promise<IItem[]>;
  findItemsByIdList: (ids: string[]) => Promise<IItem[]>;
  create: (item: ItemDTO) => Promise<IItem>;
  updateById: (id: string, newItem: ItemDTO) => Promise<IItem>;
  removeById: (id: string) => Promise<IItem>;
}

export interface IItemController {
  findAll: (res: Response) => Promise<Response>;
  findById: (res: Response, id: string) => Promise<Response>;
  findAllByUserId: (res: Response, idUser: string) => Promise<Response>;
  findItemsByIdList: (res: Response, ids: string[]) => Promise<Response>;
  create: (res: Response, item: ItemDTO) => Promise<Response>;
  updateById: (
    res: Response,
    id: string,
    newItem: ItemDTO
  ) => Promise<Response>;
  removeById: (res: Response, id: string) => Promise<Response>;
}
