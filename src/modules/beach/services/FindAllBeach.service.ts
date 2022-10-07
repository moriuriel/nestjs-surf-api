import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response/success';
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
  async execute() {
    const beachs = await this.beachRepository.findAll();

    const response = new SuccessReponseBuilder<IBeach[], null>()
      .setData(beachs)
      .setStatusCode(HttpStatus.OK)
      .build();

    return response;
  }
}
