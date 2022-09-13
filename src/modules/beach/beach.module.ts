import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { BeachController } from './infra/controllers/Beach.controller';
import { BeachDataBaseRepository } from './infra/repositories/BeachDatabase.repository';
import { CreateBeachService, FindAllBeachService } from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [BeachController],
  providers: [BeachDataBaseRepository, CreateBeachService, FindAllBeachService],
})
export class BeachModule {}
