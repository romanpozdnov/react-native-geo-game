import { Module } from "@nestjs/common";

import { FoundController } from "./found.controller";
import { FindService } from "./found.service";
import { UserSchema } from "./found.schema";

import { createModule } from "@constants/utils";

import { MODULES } from "@constants/modules";

@Module({
  imports: [createModule(MODULES.item, UserSchema)],
  controllers: [FoundController],
  providers: [FindService]
})
export class ItemModule {}
