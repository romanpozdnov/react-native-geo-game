import { UserDTO } from "./user.dto";
import { Response } from "express";

export interface IUser {
  email: string;
  password: string;
}

export type TUpdateProps = { id: string; user: UserDTO };
export interface IUserServices {
  findAll: () => Promise<IUser[]>;
  findByEmail: (email: string) => Promise<IUser>;
  findById: (id: string) => Promise<IUser>;
  create: (user: UserDTO) => Promise<IUser>;
  updateById: (id: string, user: UserDTO) => Promise<IUser>;
  removeById: (id: string) => Promise<IUser>;
}
export interface IUserController {
  findAll: (res: Response) => Promise<Response>;
  findByEmail: (res: Response, email: string) => Promise<Response>;
  findById: (res: Response, id: string) => Promise<Response>;
  create: (res: Response, user: UserDTO) => Promise<Response>;
  updateById: (res: Response, id: string, user: UserDTO) => Promise<Response>;
  removeById: (res: Response, id: string) => Promise<Response>;
}
