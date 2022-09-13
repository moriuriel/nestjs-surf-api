import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Championship } from '../../domain/entities/Championship';
import {
  IChampionship,
  IChampionshipRepository,
} from '../../domain/repositories/IChampionshipRepository';
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
}
