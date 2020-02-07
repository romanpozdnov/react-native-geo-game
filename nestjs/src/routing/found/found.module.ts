import { Module } from "@nestjs/common";

import { FoundController } from "./found.controller";
import { FoundService } from "./found.service";
import { UserSchema } from "./found.schema";

import { createModule } from "@constants/utils";

import { MODULES } from "@constants/modules";

@Module({
  imports: [createModule(MODULES.item, UserSchema)],
  controllers: [FoundController],
  providers: [FoundService]
})
export class ItemModule {}
