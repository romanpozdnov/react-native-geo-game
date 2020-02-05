import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";

import { UserDTO } from "./user.dto";

import { MODULES } from "@constants/modules";

import { IUserFunction, IUser } from "./user.types";

@Injectable()
export class UserService implements IUserFunction {
  constructor(
    @InjectModel(MODULES.user)
    private readonly UserModule: Model<IUser & Document>
  ) {}

  async findByEmail(email: string): Promise<IUser> {
    return await this.UserModule.findOne({ email });
  }
  async updateById(id: string, user: UserDTO): Promise<IUser> {
    return await this.UserModule.findByIdAndUpdate(id, user);
  }

  async removeById(id: string): Promise<IUser> {
    return await this.UserModule.findByIdAndRemove(id);
  }

  async findAll(): Promise<IUser[]> {
    return await this.UserModule.find();
  }

  async findById(id: string): Promise<IUser> {
    return await this.UserModule.findById(id);
  }

  async create(user: UserDTO): Promise<IUser> {
    return await new this.UserModule(user).save();
  }
}
