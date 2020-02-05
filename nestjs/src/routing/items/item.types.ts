import { Document } from "mongoose";

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
export interface IItem extends IItemField, Document {
  id: string;
}

export interface IItemFunc {
  findAll: () => Promise<IItem[]>;
  findById: (id: string) => Promise<IItem>;
  findAllByUserId: (idUser: string) => Promise<IItem[]>;
  create: (item: ItemDTO) => Promise<IItem>;
  updateById: ({ id: string, newItem: ItemDTO }) => Promise<IItem>;
  removeById: (id: string) => Promise<IItem>;
}
