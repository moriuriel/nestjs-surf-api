import { Beach } from '@/modules/beach/domain/entities/Beach';
import { IBeachRepository } from '@/modules/beach/domain/repositories/IBeachRepository';
import { BeachDataBaseRepository } from '@/modules/beach/infra/repositories/BeachDatabase.repository';
import { BeachMemoryRepository } from '@/modules/beach/infra/repositories/BeachMemory.repository';
import { FindAllBeachService } from '@/modules/beach/services';
import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';

const makeSut = async () => {
  const moduleRef = await Test.createTestingModule({
    providers: [
      {
        provide: BeachDataBaseRepository,
        useFactory: () => {
          return new BeachMemoryRepository();
        },
      },
      FindAllBeachService,
    ],
  }).compile();

  return {
    findAllBeachService:
      moduleRef.get<FindAllBeachService>(FindAllBeachService),
    beachRepository: moduleRef.get<IBeachRepository>(BeachDataBaseRepository),
  };
};

describe('Find All Beach Service', () => {
  test('should be defined', async () => {
    const { beachRepository, findAllBeachService } = await makeSut();

    expect(beachRepository).toBeDefined();
    expect(findAllBeachService).toBeDefined();
  });

  test('should be return beach list', async () => {
    const { beachRepository, findAllBeachService } = await makeSut();

    const beachEntity = new Beach('valid-beach', 'N', -28.3513, -48.8167, 10);

    await beachRepository.create(beachEntity);

    const beachs = await findAllBeachService.execute({ limit: 0, page: 1 });

    expect(beachs).toHaveProperty('data');

    expect(beachs.statusCode).toBe(HttpStatus.OK);
  });
});
