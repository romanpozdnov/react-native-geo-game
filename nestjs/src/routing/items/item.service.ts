import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";

import { CreateItemDto } from "./item.dto";

import { MODULES } from "../../constants/modules";

import { IItemFunc, IItem } from "./item.types";

@Injectable()
export class ItemService implements IItemFunc {
  constructor(
    @InjectModel(MODULES.item)
    private readonly itemModule: Model<IItem & Document>
  ) {}

  async updateItem(id: string, newItem: CreateItemDto) {
    return await this.itemModule.findByIdAndUpdate(id, newItem);
  }

  async removeItem(id: string) {
    return await this.itemModule.findByIdAndRemove(id);
  }

  async findAll() {
    return await this.itemModule.find();
  }

  async findOne(id: string) {
    return await this.itemModule.findById(id);
  }

  async createItem(item: CreateItemDto) {
    const savedItem = new this.itemModule(item);
    return await savedItem.save();
  }

  async findAllByUserId(idUser: string) {
    return await this.itemModule.find({ idUser });
  }
}
