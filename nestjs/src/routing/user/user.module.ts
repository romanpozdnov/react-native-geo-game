import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserSchema } from "./user.schema";

import { createModule } from "@constants/utils";
import { MODULES } from "@constants/modules";

@Module({
  imports: [createModule(MODULES.user, UserSchema)],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
