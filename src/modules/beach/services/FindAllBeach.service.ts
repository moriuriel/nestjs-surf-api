import { Inject, Injectable } from '@nestjs/common';
import {
  IBeach,
  IBeachRepository,
} from '../domain/repositories/IBeachRepository';
import { BeachDataBaseRepository } from '../infra/repositories/BeachDatabase.repository';

@Injectable()
export class FindAllBeachService {
  constructor(
    @Inject(BeachDataBaseRepository)
    private beachRepository: IBeachRepository,
  ) {}
  async execute(): Promise<IBeach[]> {
    const beachs = this.beachRepository.findAll();

    return beachs;
  }
}
