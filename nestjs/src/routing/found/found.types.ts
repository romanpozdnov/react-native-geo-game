import { Document } from "mongoose";
import { Response } from "express";

import { FoundDTO } from "./found.dto";

export interface IFoundField {
  idUser: string;
  itemsIdList: string[];
}
export interface IFound extends IFoundField, Document {
  _id: string;
}

export interface IFoundService {
  findAll: () => Promise<IFound[]>;
  findById: (id: string) => Promise<IFound>;
  findByUserId: (idUser: string) => Promise<IFound>;
  findByItemId: (idItem: string) => Promise<IFound>;
  create: (found: FoundDTO) => Promise<IFound>;
  updateById: (id: string, found: FoundDTO) => Promise<IFound>;
  removeById: (id: string) => Promise<IFound>;
}

export interface IFoundController {
  findAll: (res: Response) => Promise<Response>;
  findById: (res: Response, id: string) => Promise<Response>;
  findByUserId: (res: Response, idUser: string) => Promise<Response>;
  findByItemId: (res: Response, idItem: string) => Promise<Response>;
  create: (res: Response, found: FoundDTO) => Promise<Response>;
  updateById: (res: Response, id: string, found: FoundDTO) => Promise<Response>;
  removeById: (res: Response, id: string) => Promise<Response>;
}
