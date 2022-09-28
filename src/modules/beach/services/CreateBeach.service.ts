import {
  HttpStatus,
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SuccessReponseBuilder } from '@/infra/response';
import { Beach } from '@/modules/beach/domain/entities/Beach';
import {
  IBeach,
  IBeachRepository,
} from '@/modules/beach/domain/repositories/IBeachRepository';
import { ICreateBeachServiceParams } from '@/modules/beach/domain/services/ICreateBeachService';
import { BeachDataBaseRepository } from '@/modules/beach/infra/repositories/BeachDatabase.repository';

@Injectable()
export class CreateBeachService {
  constructor(
    @Inject(BeachDataBaseRepository)
    private beachRepository: IBeachRepository,
  ) {}
  async execute({ lat, lng, name, position }: ICreateBeachServiceParams) {
    const beach = new Beach(name, position, lat, lng);

    const nameIsAlreadyInUse = await this.beachRepository.findByName(
      beach.name,
    );

    if (nameIsAlreadyInUse) {
      throw new UnprocessableEntityException('Já existe praia com esse nome');
    }

    const beachCreated = await this.beachRepository.create(beach);

    const response = new SuccessReponseBuilder<IBeach, null>()
      .setData(beachCreated)
      .setStatusCode(HttpStatus.CREATED)
      .build();

    return response;
  }
}
