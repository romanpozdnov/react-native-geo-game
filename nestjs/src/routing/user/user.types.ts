import { UserDTO } from "./user.dto";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserFunction {
  findAll: () => Promise<IUser[]>;
  findByEmail: (email: string) => Promise<IUser>;
  findById: (id: string) => Promise<IUser>;
  create: (user: UserDTO) => Promise<IUser>;
  updateById: (id: string, user: UserDTO) => Promise<IUser>;
  removeById: (id: string) => Promise<IUser>;
}
