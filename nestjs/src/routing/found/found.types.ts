import { Document } from "mongoose";
import { Response } from "express";

import { FoundDTO } from "./found.dto";

export interface IFoundField {
  idUser: string;
  itemsIdList: string[];
}
export interface IFiend extends IFoundField, Document {
  _id: string;
}

export interface IFindService {
  findAll: () => Promise<IFiend[]>;
  findById: (id: string) => Promise<IFiend>;
  findByUserId: (idUser: string) => Promise<IFiend>;
  findByItemId: (idItem: string) => Promise<IFiend>;
  create: (found: FoundDTO) => Promise<IFiend>;
  updateById: (id: string, found: FoundDTO) => Promise<IFiend>;
  removeById: (id: string) => Promise<IFiend>;
}

export interface IFindController {
  findAll: (res: Response) => Promise<Response>;
  findById: (res: Response, id: string) => Promise<Response>;
  findByUserId: (res: Response, idUser: string) => Promise<Response>;
  findByItemId: (res: Response, idItem: string) => Promise<Response>;
  create: (res: Response, found: FoundDTO) => Promise<Response>;
  updateById: (res: Response, id: string, found: FoundDTO) => Promise<Response>;
  removeById: (res: Response, id: string) => Promise<Response>;
}
