import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response';
import {
  IBeach,
  IBeachRepository,
} from '../domain/repositories/IBeachRepository';
import { BeachDataBaseRepository } from '../infra/repositories/BeachDatabase.repository';

@Injectable()
export class FindOneBeachService {
  constructor(
    @Inject(BeachDataBaseRepository)
    private beachRepository: IBeachRepository,
  ) {}

  async execute(id: string) {
    const beach = await this.beachRepository.findById(id);

    const response = new SuccessReponseBuilder<IBeach, null>()
      .setData(beach)
      .setStatusCode(HttpStatus.OK);

    return response;
  }
}
