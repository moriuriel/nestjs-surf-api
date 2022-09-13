import { Inject, Injectable } from '@nestjs/common';
import { IBeachRepository } from 'src/modules/beach/domain/repositories/IBeachRepository';
import { BeachDataBaseRepository } from 'src/modules/beach/infra/repositories/BeachDatabase.repository';

@Injectable()
export class CreateChampionshipService {
  constructor(
    @Inject(BeachDataBaseRepository)
    private beachRepository: IBeachRepository,
  ) {}
  async execute({ lat, lng, name, position }: ICreateBeachServiceParams) {
    const beach = new Beach(name, position, lat, lng);

    const beachCreated = this.beachRepository.create(beach);

    return beachCreated;
  }
}
