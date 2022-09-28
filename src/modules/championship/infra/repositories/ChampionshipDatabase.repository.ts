import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Championship } from '../../domain/entities/Championship';
import {
  IChampionship,
  IChampionshipRepository,
  IFindAllChampionships,
} from '../../domain/repositories/IChampionshipRepository';
import { IPagination } from '@/common/decorators/getPagination';
@Injectable()
export class ChampionshipDatabaseRepository implements IChampionshipRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create({
    beach_id,
    event_date,
    name,
    status,
  }: Championship): Promise<IChampionship> {
    return this.prismaService.championship.create({
      data: { beach_id, name, status, event_date },
    });
  }

  async findAllChampionships(
    pagination: IPagination,
  ): Promise<IFindAllChampionships> {
    const data = await this.prismaService.championship.findMany({
      include: { beach: true },
      take: pagination.limit,
      skip: (pagination.page - 1) * pagination.limit,
    });

    const total = await this.prismaService.championship.count();

    return {
      total,
      championships: data,
    };
  }

  async findByName(name: string): Promise<IChampionship> {
    return this.prismaService.championship.findUnique({ where: { name } });
  }
}
