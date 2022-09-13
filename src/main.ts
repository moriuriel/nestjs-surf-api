import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = env().port;

  await app.listen(port, () => {
    console.log(`API is running in port ${port}`);
  });
}
bootstrap();
