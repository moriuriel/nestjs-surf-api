import { Beach } from '@/modules/beach/domain/entities/Beach';
import { IBeachRepository } from '@/modules/beach/domain/repositories/IBeachRepository';
import { BeachDataBaseRepository } from '@/modules/beach/infra/repositories/BeachDatabase.repository';
import { BeachMemoryRepository } from '@/modules/beach/infra/repositories/BeachMemory.repository';
import { CreateBeachService } from '@/modules/beach/services';
import { UnprocessableEntityException } from '@nestjs/common';
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
      CreateBeachService,
    ],
  }).compile();

  return {
    createBeachService: moduleRef.get<CreateBeachService>(CreateBeachService),
    beachRepository: moduleRef.get<IBeachRepository>(BeachDataBaseRepository),
  };
};

describe('Create Beach Service', () => {
  test('should be defined', async () => {
    const { beachRepository, createBeachService } = await makeSut();

    expect(beachRepository).toBeDefined();
    expect(createBeachService).toBeDefined();
  });

  test('should be create beach with successfully', async () => {
    const { createBeachService } = await makeSut();

    const beachEntity = new Beach('valid-beach', 'N', -28.3513, -48.8167, 10);

    const beach = await createBeachService.execute(beachEntity);

    expect(beach).toHaveProperty('data.id');
  });

  test('should be call repository method with current params', async () => {
    const { beachRepository, createBeachService } = await makeSut();

    const spyMethodCreate = jest.spyOn(beachRepository, 'create');

    const spyMethodFindByName = jest.spyOn(beachRepository, 'findByName');

    const beachEntity = new Beach('valid-beach', 'N', -28.3513, -48.8167, 10);

    await createBeachService.execute(beachEntity);

    expect(spyMethodFindByName).toBeCalledTimes(1);

    expect(spyMethodFindByName).toBeCalledWith('valid-beach');

    expect(spyMethodCreate).toBeCalledTimes(1);

    expect(spyMethodCreate).toBeCalledWith(beachEntity);
  });

  test('should be return exception for name duplicate', async () => {
    const { beachRepository, createBeachService } = await makeSut();

    const beachEntity = new Beach('valid-beach', 'N', -28.3513, -48.8167, 10);

    await beachRepository.create(beachEntity);

    expect(createBeachService.execute(beachEntity)).rejects.toBeInstanceOf(
      UnprocessableEntityException,
    );
  });
});
