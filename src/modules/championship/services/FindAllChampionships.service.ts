import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response';
import {
  IChampionship,
  IChampionshipRepository,
} from '../domain/repositories/IChampionshipRepository';
import { ChampionshipDatabaseRepository } from '../infra/repositories/ChampionshipDatabase.repository';
import { IPagination } from '@/common/decorators/getPagination';

@Injectable()
export class FindAllChampionshipsService {
  constructor(
    @Inject(ChampionshipDatabaseRepository)
    private championshipRepository: IChampionshipRepository,
  ) {}

  async execute(pagination: IPagination) {
    const { championships, total } =
      await this.championshipRepository.findAllChampionships(pagination);

    const metaData = {
      ...pagination,
      total,
    };
    const response = new SuccessReponseBuilder<IChampionship[], IPagination>()
      .setData(championships)
      .setMetaData(metaData)
      .setStatusCode(HttpStatus.OK)
      .build();

    return response;
  }
}
