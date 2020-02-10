import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { ItemDTO } from "./item.dto";
import { ID_TYPE } from "@constants/field";

import { MODULES } from "@constants/modules";

import { IItem, IItemServices } from "./item.types";

@Injectable()
export class ItemService implements IItemServices {
  constructor(
    @InjectModel(MODULES.item)
    private readonly ItemModule: Model<IItem>
  ) {}

  async updateById(id: string, newItem: ItemDTO) {
    return await this.ItemModule.findByIdAndUpdate(id, newItem);
  }

  async removeById(id: string) {
    return await this.ItemModule.findByIdAndRemove(id);
  }

  async create(item: ItemDTO) {
    const { idUser, coordinates } = item;
    const checkItem = this.ItemModule.findOne({ idUser, coordinates });
    if (!checkItem) return await new this.ItemModule(item).save();
    throw new Error("Already create item with this parameter");
  }

  async findAll() {
    return await this.ItemModule.find();
  }

  async findById(id: string) {
    return await this.ItemModule.findById(id);
  }

  async findAllByUserId(idUser: string) {
    return await this.ItemModule.find({ idUser });
  }

  async findItemsByIdList(ids: string[]) {
    return await this.ItemModule.find({
      _id: { $in: ids.map(id => ID_TYPE(id)) }
    });
  }
}
