import { MongooseModule } from "@nestjs/mongoose";
export const createModule = (name: string, schema: any) =>
  MongooseModule.forFeature([{ name, schema }]);
