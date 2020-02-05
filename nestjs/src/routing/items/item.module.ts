import { Module } from "@nestjs/common";

import { ItemController } from "./item.controller";
import { ItemService } from "./item.service";
import { ItemSchema } from "./item.schema";

import { createModule } from "@constants/utils";

import { MODULES } from "@constants/modules";

@Module({
  imports: [createModule(MODULES.item, ItemSchema)],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
