import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ChampionshipController } from './infra/controllers/Championship.controller';
import { ChampionshipDatabaseRepository } from './infra/repositories/ChampionshipDatabase.repository';
import { CreateChampionshipService } from './services/CreateChampionship.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ChampionshipController],
  providers: [ChampionshipDatabaseRepository, CreateChampionshipService],
})
export class ChampionshipModule {}
