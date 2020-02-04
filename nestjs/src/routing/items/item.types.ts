import { Document } from "mongoose";
import { CreateItemDto } from "./item.dto";

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
  findOne: (id: string) => Promise<IItem>;
  createItem: (item: CreateItemDto) => Promise<IItem>;
  updateItem: (id: string, newItem: CreateItemDto) => Promise<IItem>;
  removeItem: (id: string) => Promise<IItem>;
  findAllByUserId: (idUser: string) => Promise<IItem[]>;
}
