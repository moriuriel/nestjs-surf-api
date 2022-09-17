import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SuccessReponseBuilder } from 'src/infra/response';
import {
  IChampionship,
  IChampionshipRepository,
} from '../domain/repositories/IChampionshipRepository';
import { ChampionshipDatabaseRepository } from '../infra/repositories/ChampionshipDatabase.repository';

@Injectable()
export class FindAllChampionshipsService {
  constructor(
    @Inject(ChampionshipDatabaseRepository)
    private championshipRepository: IChampionshipRepository,
  ) {}

  async execute() {
    const championships =
      await this.championshipRepository.findAllChampionships();

    const response = new SuccessReponseBuilder<IChampionship[]>()
      .setData(championships)
      .setStatusCode(HttpStatus.OK)
      .build();

    return response;
  }
}
