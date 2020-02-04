import { ItemService } from "./item.service";
import { CreateItemDto } from "./item.dto";
import { IItemFunc } from "./item.types";
import { ROUTING } from "../../constants/routing";
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Header
} from "@nestjs/common";

// TODO: try/catch prevent error

@Controller(ROUTING.ITEMS.root)
export class ItemController implements IItemFunc {
  constructor(private readonly ItemService: ItemService) {}

  @Get()
  async findAll() {
    return this.ItemService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.ItemService.findOne(id);
  }

  @Get(":idUser")
  async findAllByUserId(@Param("idUser") id: string) {
    return this.ItemService.findAllByUserId(id);
  }

  @Header("Content-Type", "application/json")
  @Post()
  // TODO: validation
  async createItem(@Body() item: CreateItemDto) {
    return this.ItemService.createItem(item);
  }

  @Delete(":id")
  async removeItem(@Param("id") id: string) {
    return this.ItemService.removeItem(id);
  }

  @Put(":id")
  async updateItem(@Param("id") id: string, @Body() newItem: CreateItemDto) {
    return this.ItemService.updateItem(id, newItem);
  }
}
