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

import { FoundService } from "./found.service";
import { FoundDTO } from "./found.dto";

import { utilCall } from "@constants/utils";

import { STRINGS } from "@constants/string";
import { ROUTING } from "@constants/routing";

import { IFoundController } from "./found.types";

const { FOUND_ERROR } = STRINGS;

@Controller(ROUTING.USER_ITEM_FOUNDS)
export class FoundController implements IFoundController {
  constructor(private readonly FoundService: FoundService) {}

  @Get()
  async findAll(@Res() res: Response) {
    return await utilCall(res, FOUND_ERROR.find_all, () =>
      this.FoundService.findAll()
    );
  }

  @Get("id/:id")
  async findById(@Res() res: Response, @Param("id") id: string) {
    return await utilCall(res, FOUND_ERROR.find_by_id, () =>
      this.FoundService.findById(id)
    );
  }

  @Get("idUser/:idUser")
  async findByUserId(@Res() res: Response, @Param("idUser") id: string) {
    return await utilCall(res, FOUND_ERROR.find_by_user_id, () =>
      this.FoundService.findByUserId(id)
    );
  }

  @Get("idItem/:idItem")
  async findByItemId(@Res() res: Response, @Param("idItem") id: string) {
    return await utilCall(res, FOUND_ERROR.find_by_user_id, () =>
      this.FoundService.findByItemId(id)
    );
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res: Response, @Body() item: FoundDTO) {
    return await utilCall(res, FOUND_ERROR.create, () =>
      this.FoundService.create(item)
    );
  }

  @Delete(":id")
  async removeById(@Res() res: Response, @Param("id") id: string) {
    return await utilCall(res, FOUND_ERROR.remove, () =>
      this.FoundService.removeById(id)
    );
  }

  @Put(":id")
  async updateById(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() newItem: FoundDTO
  ) {
    return await utilCall(res, FOUND_ERROR.remove, () =>
      this.FoundService.updateById(id, newItem)
    );
  }
}
