import { Inject, Injectable } from '@nestjs/common';
import { Beach } from '../domain/entities/Beach';
import { IBeachRepository } from '../domain/repositories/IBeachRepository';
import { ICreateBeachServiceParams } from '../domain/services/ICreateBeachService';
import { BeachDataBaseRepository } from '../infra/repositories/BeachDatabase.repository';

@Injectable()
export class CreateBeachService {
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
