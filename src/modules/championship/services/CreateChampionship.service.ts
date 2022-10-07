import {
  HttpStatus,
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response/success';
import { Championship } from '../domain/entities/Championship';
import {
  IChampionship,
  IChampionshipRepository,
} from '../domain/repositories/IChampionshipRepository';
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

    const nameIsAlreadyInUse = await this.championshipRepository.findByName(
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

    const response = new SuccessReponseBuilder<IChampionship, null>()
      .setData(championshipCreated)
      .setStatusCode(HttpStatus.CREATED)
      .build();

    return response;
  }
}
