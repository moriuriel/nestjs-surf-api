import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Beach } from '../../domain/entities/Beach';
import {
  IBeach,
  IBeachRepository,
} from '../../domain/repositories/IBeachRepository';

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
      },
    });
  }

  async findAll(): Promise<IBeach[]> {
    return this.prismaService.beach.findMany();
  }
}