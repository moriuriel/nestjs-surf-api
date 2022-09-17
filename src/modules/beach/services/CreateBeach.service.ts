import {
  HttpStatus,
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SuccessReponseBuilder } from 'src/infra/response';
import { Beach } from '../domain/entities/Beach';
import {
  IBeach,
  IBeachRepository,
} from '../domain/repositories/IBeachRepository';
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

    const nameIsAlreadyInUse = await this.beachRepository.findByName(
      beach.name,
    );

    if (nameIsAlreadyInUse) {
      throw new UnprocessableEntityException('Já existe praia com esse nome');
    }

    const beachCreated = await this.beachRepository.create(beach);

    const response = new SuccessReponseBuilder<IBeach>()
      .setData(beachCreated)
      .setStatusCode(HttpStatus.CREATED)
      .build();

    return response;
  }
}
