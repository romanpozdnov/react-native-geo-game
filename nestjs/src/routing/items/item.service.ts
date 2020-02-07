import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";

import { ItemDTO } from "./item.dto";

import { MODULES } from "@constants/modules";

import { IItemFunc, IItem } from "./item.types";

@Injectable()
export class ItemService implements IItemFunc {
  constructor(
    @InjectModel(MODULES.item)
    private readonly itemModule: Model<IItem & Document>
  ) {}

  async updateById(id: string, newItem: ItemDTO) {
    return await this.itemModule.findByIdAndUpdate(id, newItem);
  }

  async removeById(id: string) {
    return await this.itemModule.findByIdAndRemove(id);
  }

  async findAll() {
    return await this.itemModule.find();
  }

  async findById(id: string) {
    return await this.itemModule.findById(id);
  }

  async create(item: ItemDTO) {
    const { idUser, coordinates } = item;
    const checkItem = this.itemModule.findOne({ idUser, coordinates });
    if (!checkItem) return await new this.itemModule(item).save();
    throw new Error("Already create item with this parameter");
  }

  async findAllByUserId(idUser: string) {
    return await this.itemModule.find({ idUser });
  }
}
