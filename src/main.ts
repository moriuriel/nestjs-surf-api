import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import env from './config/env';
import { HttpExceptionFilter } from './infra/errors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = env().port;

  app.setGlobalPrefix('surf/v1/api');

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Surf Api')
    .setDescription('Simple API for surfing championships')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  await app.listen(port);
}
bootstrap();
