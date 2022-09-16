import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
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

    const nameIsAlreadyInUse = this.championshipRepository.findByName(
      championship.name,
    );

    if (nameIsAlreadyInUse) {
      throw new UnprocessableEntityException(
        'Já existe campeonato com esse nome',
      );
    }

    const championshipCreated = await this.championshipRepository.create(
      championship,
    );

    return championshipCreated;
  }
}
