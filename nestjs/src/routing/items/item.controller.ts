import { Controller, Get, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { Param, Delete, Put, Header, NotFoundException } from "@nestjs/common";

import { ItemService } from "./item.service";
import { ItemDTO } from "./item.dto";

import { ROUTING } from "@constants/routing";

@Controller(ROUTING.ITEMS.root)
export class ItemController {
  constructor(private readonly ItemService: ItemService) {}

  @Get()
  async findAll(@Res() res) {
    try {
      const items = await this.ItemService.findAll();
      return res.status(HttpStatus.OK).json({
        message: "Find all items",
        items
      });
    } catch {
      throw new NotFoundException("Items not found");
    }
  }

  @Get(":id")
  async findById(@Res() res, @Param("id") id: string) {
    try {
      const item = await this.ItemService.findById(id);
      if (!item) throw new NotFoundException("Items not found");
      return res.status(HttpStatus.OK).json({
        message: "Found user by id",
        item
      });
    } catch {
      throw new NotFoundException("Items not found");
    }
  }

  @Get(":idUser")
  async findAllByUserId(@Res() res, @Param("idUser") id: string) {
    try {
      const items = await this.ItemService.findAllByUserId(id);
      if (!items) throw new NotFoundException("Items not found");
      return res.status(HttpStatus.OK).json({
        message: "Found user by id",
        items
      });
    } catch {
      return [];
    }
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res, @Body() item: ItemDTO) {
    try {
      const newItem = await this.ItemService.create(item);
      if (!newItem) throw new NotFoundException("Items not found");
      return res.status(HttpStatus.OK).json({
        message: "Item create successful",
        user: newItem
      });
    } catch {
      throw new NotFoundException("Items data not valid");
    }
  }

  @Delete(":id")
  async removeById(@Res() res, @Param("id") id: string) {
    try {
      const item = await this.ItemService.removeById(id);
      if (!item) throw new NotFoundException("Items not found");
      return res.status(HttpStatus.OK).json({
        message: "Item remove successful",
        item
      });
    } catch {
      throw new NotFoundException("Items not found");
    }
  }

  @Put(":id")
  async updateById(@Res() res, @Param("id") id: string, @Body() user: ItemDTO) {
    try {
      const updateItem = await this.ItemService.updateById(id, user);
      if (!updateItem) throw new NotFoundException("Items not found");
      return res.status(HttpStatus.OK).json({
        message: "Item remove successful",
        user: updateItem
      });
    } catch {
      throw new NotFoundException("Items not found");
    }
  }
}
