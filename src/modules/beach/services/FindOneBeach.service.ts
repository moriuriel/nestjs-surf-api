import {
  HttpStatus,
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response/success';
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

    if (!beach) {
      throw new UnprocessableEntityException(
        'Praia não encontrada para ID informado',
      );
    }

    const response = new SuccessReponseBuilder<IBeach, null>()
      .setData(beach)
      .setStatusCode(HttpStatus.OK);

    return response;
  }
}
