import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response/success';
import {
  IBeach,
  IBeachRepository,
} from '../domain/repositories/IBeachRepository';
import { BeachDataBaseRepository } from '../infra/repositories/BeachDatabase.repository';
import { IPagination } from '@/common/decorators/getPagination';

@Injectable()
export class FindAllBeachService {
  constructor(
    @Inject(BeachDataBaseRepository)
    private beachRepository: IBeachRepository,
  ) {}
  async execute(pagination: IPagination) {
    const { beachs, total } = await this.beachRepository.findAll(pagination);

    const metaData: IPagination = {
      ...pagination,
      total,
      totalPages: Math.ceil(total / pagination.limit),
    };

    const response = new SuccessReponseBuilder<IBeach[], IPagination>()
      .setData(beachs)
      .setMetaData(metaData)
      .setStatusCode(HttpStatus.OK)
      .build();

    return response;
  }
}
