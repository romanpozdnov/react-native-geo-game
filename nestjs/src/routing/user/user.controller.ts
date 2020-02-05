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

import { UserDTO } from "./user.dto";

import { UserService } from "./user.service";
import { utilCall } from "@constants/utils";

import { STRINGS } from "@constants/string";
import { ROUTING } from "@constants/routing";

import { IUser } from "./user.types";

const { USERS_ERROR } = STRINGS;

@Controller(ROUTING.USER.root)
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async findAll(@Res() res) {
    return await utilCall(res, USERS_ERROR.find_all, this.UserService.findAll);
  }

  @Get(":id")
  async findById(@Res() res, @Param("id") id: string): Promise<IUser> {
    return await utilCall(
      res,
      USERS_ERROR.find_by_id,
      this.UserService.findById,
      id
    );
  }

  @Get(":email")
  async findByEmail(@Res() res, @Param("email") email: string): Promise<IUser> {
    return await utilCall(
      res,
      USERS_ERROR.find_by_email,
      this.UserService.findByEmail,
      email
    );
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res, @Body() user: UserDTO): Promise<IUser> {
    return await utilCall(
      res,
      USERS_ERROR.create,
      this.UserService.create,
      user
    );
  }

  @Delete(":id")
  async removeById(@Res() res, @Param("id") id: string): Promise<IUser> {
    return await utilCall(
      res,
      USERS_ERROR.remove,
      this.UserService.removeById,
      id
    );
  }

  @Put(":id")
  async updateById(
    @Res() res,
    @Param("id") id: string,
    @Body() user: UserDTO
  ): Promise<IUser> {
    return await utilCall<IUser, { id: string; user: UserDTO }>(
      res,
      USERS_ERROR.update,
      this.UserService.updateById,
      { id, user }
    );
  }
}
