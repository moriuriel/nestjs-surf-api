import { Inject, Injectable } from '@nestjs/common';
import { Championship } from '../domain/entities/Championship';
import { IChampionshipRepository } from '../domain/repositories/IChampionshipRepository';
import { ICreateChampionshioServiceParams } from '../domain/services/ICreateChampionshipService';
import { ChampionshipDatabaseRepository } from '../infra/repositories/ChampionshipDatabase.repository';

@Injectable()
export class CreateChampionshipService {
  constructor(
    @Inject(ChampionshipDatabaseRepository)
    private championshipRepository: IChampionshipRepository,
  ) {}
  async execute({
    name,
    event_date,
    beach_id,
  }: ICreateChampionshioServiceParams) {
    const championship = new Championship(name, event_date, beach_id);

    const championshipCreated = await this.championshipRepository.create(
      championship,
    );

    return championshipCreated;
  }
}
