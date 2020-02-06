import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

import { PORT } from "database";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`Start on port: ${PORT}`);
}

bootstrap();
