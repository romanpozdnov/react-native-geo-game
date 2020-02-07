import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Param,
  Delete,
  Put,
  Header
} from "@nestjs/common";
import { Response } from "express";

import { UserDTO } from "./user.dto";

import { UserService } from "./user.service";
import { utilCall } from "@constants/utils";

import { STRINGS } from "@constants/string";
import { ROUTING } from "@constants/routing";

import { IUser } from "./user.types";

const { USERS_ERROR } = STRINGS;

@Controller(ROUTING.USER)
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get("id/:id")
  async findById(@Res() res: Response, @Param("id") id: string) {
    return await utilCall(res, USERS_ERROR.find_by_id, () =>
      this.UserService.findById(id)
    );
  }

  @Get("email/:email")
  async findByEmail(@Res() res: Response, @Param("email") email: string) {
    return await utilCall(res, USERS_ERROR.find_by_email, () =>
      this.UserService.findByEmail(email)
    );
  }

  @Get()
  async findAll(@Res() res: Response) {
    return await utilCall(res, USERS_ERROR.find_all, () =>
      this.UserService.findAll()
    );
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res: Response, @Body() user: UserDTO) {
    return await utilCall(res, USERS_ERROR.create, () =>
      this.UserService.create(user)
    );
  }

  @Delete(":id")
  async removeById(@Res() res: Response, @Param("id") id: string) {
    return await utilCall(res, USERS_ERROR.remove, () =>
      this.UserService.removeById(id)
    );
  }

  @Put(":id")
  async updateById(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() user: UserDTO
  ) {
    return await utilCall(res, USERS_ERROR.update, () =>
      this.UserService.updateById(id, user)
    );
  }
}
