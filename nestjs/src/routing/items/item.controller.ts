import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Header,
  Res
} from "@nestjs/common";
import { Response } from "express";

import { ItemService } from "./item.service";
import { ItemDTO } from "./item.dto";

import { utilCall } from "@constants/utils";

import { STRINGS } from "@constants/string";
import { ROUTING } from "@constants/routing";

const { ITEMS_ERROR } = STRINGS;

@Controller(ROUTING.ITEMS)
export class ItemController {
  constructor(private readonly ItemService: ItemService) {}

  @Get()
  async findAll(@Res() res: Response) {
    return await utilCall(res, ITEMS_ERROR.find_all, () =>
      this.ItemService.findAll()
    );
  }

  @Get("id/:id")
  async findById(@Res() res: Response, @Param("id") id: string) {
    return await utilCall(res, ITEMS_ERROR.find_by_id, () =>
      this.ItemService.findById(id)
    );
  }

  @Get("idUser/:idUser")
  async findAllByUserId(@Res() res: Response, @Param("idUser") id: string) {
    return await utilCall(res, ITEMS_ERROR.find_by_user_id, () =>
      this.ItemService.findAllByUserId(id)
    );
  }

  @Header("Content-Type", "application/json")
  @Post("ids")
  async findItemsByIdList(@Res() res: Response, @Body() ids: string[]) {
    return await utilCall(res, ITEMS_ERROR.find_found_user_items, () =>
      this.ItemService.findItemsByIdList(ids)
    );
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res: Response, @Body() item: ItemDTO) {
    return await utilCall(res, ITEMS_ERROR.create, () =>
      this.ItemService.create(item)
    );
  }

  @Delete(":id")
  async removeById(@Res() res: Response, @Param("id") id: string) {
    return await utilCall(res, ITEMS_ERROR.remove, () =>
      this.ItemService.removeById(id)
    );
  }

  @Put(":id")
  async updateById(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() newItem: ItemDTO
  ) {
    return await utilCall(res, ITEMS_ERROR.remove, () =>
      this.ItemService.updateById(id, newItem)
    );
  }
}
