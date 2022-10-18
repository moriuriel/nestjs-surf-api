import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Beach } from '../../domain/entities/Beach';
import {
  IBeach,
  IBeachRepository,
  IFindAllBeachReponse,
} from '../../domain/repositories/IBeachRepository';
import { IPagination } from '@/common/decorators/getPagination';

@Injectable()
export class BeachDataBaseRepository implements IBeachRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(beach: Beach): Promise<IBeach> {
    return this.prismaService.beach.create({
      data: {
        name: beach.name,
        lat: beach.lat,
        lng: beach.lng,
        position: beach.position,
        favorite: beach.favorite,
        rating: beach.rating,
      },
    });
  }

  async findAll(pagination: IPagination): Promise<IFindAllBeachReponse> {
    const beachs = await this.prismaService.beach.findMany({
      take: pagination.limit,
      skip: (pagination.page - 1) * pagination.limit,
    });

    const total = await this.prismaService.beach.count();

    return {
      beachs,
      total,
    };
  }

  async findByName(name: string): Promise<IBeach> {
    return this.prismaService.beach.findUnique({ where: { name } });
  }

  async findById(id: string): Promise<IBeach> {
    return this.prismaService.beach.findUnique({ where: { id } });
  }
}
