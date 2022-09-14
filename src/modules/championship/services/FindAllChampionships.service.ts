import { Inject, Injectable } from '@nestjs/common';
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

  async execute(): Promise<IChampionship[]> {
    return this.championshipRepository.findAllChampionships();
  }
}
