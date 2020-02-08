import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { FoundDTO } from "./found.dto";

import { MODULES } from "@constants/modules";

import { IFoundService, IFound } from "./found.types";

@Injectable()
export class FoundService implements IFoundService {
  constructor(
    @InjectModel(MODULES.found)
    private readonly FindModule: Model<IFound>
  ) {}

  async updateById(id: string, newFound: FoundDTO) {
    return await this.FindModule.findByIdAndUpdate(id, newFound);
  }

  async removeById(id: string) {
    return await this.FindModule.findByIdAndRemove(id);
  }

  async create(found: FoundDTO) {
    const { idUser, itemsIdList } = found;
    const find = this.FindModule.findOne({ idUser, itemsIdList });
    if (!find) return await new this.FindModule(found).save();
    throw new Error("Already create item with this parameter");
  }

  async findAll() {
    return await this.FindModule.find();
  }

  async findById(id: string) {
    return await this.FindModule.findById(id);
  }

  async findByUserId(idUser: string) {
    return await this.FindModule.findOne({ idUser });
  }

  async findByItemId(idItem: string) {
    return await this.FindModule.findOne({ idItem });
  }
}
