import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env';
import { HttpExceptionFilter } from './infra/errors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = env().port;

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port);
}
bootstrap();
