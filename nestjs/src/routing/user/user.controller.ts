import { Controller, Get, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { Param, Delete, Put, Header, NotFoundException } from "@nestjs/common";

import { UserDTO } from "./user.dto";

import { UserService } from "./user.service";

import { ROUTING } from "@constants/routing";

@Controller(ROUTING.USER.root)
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async findAll(@Res() res) {
    try {
      const users = await this.UserService.findAll();
      return res.status(HttpStatus.OK).json({
        message: "Find all users",
        users
      });
    } catch {
      throw new NotFoundException("Users not found");
    }
  }

  @Get(":id")
  async findById(@Res() res, @Param("id") id: string) {
    try {
      const user = await this.UserService.findById(id);
      if (!user) throw new NotFoundException("Users not found");
      return res.status(HttpStatus.OK).json({
        message: "Found user by id",
        user
      });
    } catch {
      throw new NotFoundException("Users not found");
    }
  }

  @Header("Content-Type", "application/json")
  @Post()
  async create(@Res() res, @Body() user: UserDTO) {
    try {
      const newUser = await this.UserService.create(user);
      if (!newUser) throw new NotFoundException("Users not found");
      return res.status(HttpStatus.OK).json({
        message: "User create successful",
        user: newUser
      });
    } catch {
      throw new NotFoundException("Users data not valid");
    }
  }

  @Delete(":id")
  async removeById(@Res() res, @Param("id") id: string) {
    try {
      const user = await this.UserService.removeById(id);
      if (!user) throw new NotFoundException("Users not found");
      return res.status(HttpStatus.OK).json({
        message: "User remove successful",
        user
      });
    } catch {
      throw new NotFoundException("Users not found");
    }
  }

  @Put(":id")
  async updateById(@Res() res, @Param("id") id: string, @Body() user: UserDTO) {
    try {
      const updateUser = await this.UserService.updateById(id, user);
      if (!updateUser) throw new NotFoundException("Users not found");
      return res.status(HttpStatus.OK).json({
        message: "User remove successful",
        user: updateUser
      });
    } catch {
      throw new NotFoundException("Users not found");
    }
  }
}
