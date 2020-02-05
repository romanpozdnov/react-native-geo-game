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

  async updateById(id: string, user: UserDTO) {
    return await this.UserModule.findByIdAndUpdate(id, user);
  }

  async removeById(id: string) {
    return await this.UserModule.findByIdAndRemove(id);
  }

  async findAll() {
    return await this.UserModule.find();
  }

  async findById(id: string) {
    return await this.UserModule.findById(id);
  }

  async create(user: UserDTO) {
    return await new this.UserModule(user).save();
  }
}
