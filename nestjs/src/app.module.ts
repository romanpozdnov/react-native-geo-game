import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ItemModule } from "@routing/items";
import { UserModule } from "@routing/user";

import { CONNECT_URL } from "./database";

const Mongoose = MongooseModule.forRoot(CONNECT_URL, { useNewUrlParser: true });

@Module({
  imports: [
    Mongoose,
    ItemModule,
    UserModule
  ]
})
export class AppModule {}
