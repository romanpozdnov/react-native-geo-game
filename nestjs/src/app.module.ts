import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CONNECT_URL } from "./database/db.provider";
import { ItemModule } from "./routing/items";

@Module({
  imports: [MongooseModule.forRoot(CONNECT_URL), ItemModule]
})
export class AppModule {}
