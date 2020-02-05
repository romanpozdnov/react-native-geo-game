import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  Param,
  Delete,
  Put,
  Header,
  NotFoundException
} from "@nestjs/common";

import { UserDTO } from "./user.dto";

import { UserService } from "./user.service";

import { ROUTING } from "@constants/routing";

import { IUser } from "./user.types";

@Controller(ROUTING.USER.root)
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async findAll(@Res() res) {
    try {
      const users = await this.UserService.findAll();
      if (!users) throw new NotFoundException("User does not exist!");
      return res.status(HttpStatus.OK).json(users);
    } catch {
      throw new NotFoundException("User does not exist!");
    }
  }

  @Get(":id")
  async findById(@Res() res, @Param("id") id: string): Promise<IUser> {
    try {
      const user = await this.UserService.findById(id);
      if (!user) throw new NotFoundException("User does not exist!");
      return res.status(HttpStatus.OK).json(user);
    } catch {
      throw new NotFoundException("User does not exist!");
    }
  }

  @Get(":email")
  async findByEmail(@Res() res, @Param("email") email: string): Promise<IUser> {
    try {
      const user: IUser = await this.UserService.findByEmail(email);
      console.log(email);
      if (!user) throw new NotFoundException("User does not exist!");
      return res.status(HttpStatus.OK).json(user);
    } catch {
      return res.status(HttpStatus.UNAUTHORIZED);
    }
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res, @Body() user: UserDTO): Promise<IUser> {
    try {
      const newUser = await this.UserService.create(user);
      if (!newUser) throw new NotFoundException("User doesn`t create");
      return res.status(HttpStatus.OK).json(newUser);
    } catch {
      throw new NotFoundException(`${user.email} ${user.password}`);
    }
  }

  @Delete(":id")
  async removeById(@Res() res, @Param("id") id: string): Promise<IUser> {
    try {
      const user = await this.UserService.removeById(id);
      if (!user) throw new NotFoundException("User does not exist!");
      return res.status(HttpStatus.OK).json(user);
    } catch {
      throw new NotFoundException("User does not exist!");
    }
  }

  @Put(":id")
  async updateById(
    @Res() res,
    @Param("id") id: string,
    @Body() user: UserDTO
  ): Promise<IUser> {
    try {
      const updateUser = await this.UserService.updateById(id, user);
      if (!updateUser) throw new NotFoundException("User does not exist!");
      return res.status(HttpStatus.OK).json(updateUser);
    } catch {
      throw new NotFoundException("User does not exist!");
    }
  }
}
