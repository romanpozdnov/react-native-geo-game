import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ItemModule } from "@routing/items";
import { UserModule } from "@routing/user";
import { FoundModule } from "@routing/found";

import { CONNECT_URL } from "./database";

const Mongoose = MongooseModule.forRoot(CONNECT_URL);

@Module({
  imports: [Mongoose, ItemModule, UserModule, FoundModule]
})
export class AppModule {}
