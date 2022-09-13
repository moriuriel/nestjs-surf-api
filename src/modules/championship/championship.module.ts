import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ChampionshipDatabaseRepository } from './infra/repositories/ChampionshipDatabase.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [ChampionshipDatabaseRepository],
})
export class ChampionshipModule {}
