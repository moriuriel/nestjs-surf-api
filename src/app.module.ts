import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import env from './config/env';
import { DatabaseModule } from './infra/database/database.module';
import { BeachModule } from './modules/beach/beach.module';
import { ChampionshipModule } from './modules/championship/championship.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [env] }),
    DatabaseModule,
    BeachModule,
    ChampionshipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
