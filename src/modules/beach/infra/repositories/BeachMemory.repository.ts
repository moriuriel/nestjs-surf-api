import { v4 } from 'uuid';
import {
  IBeach,
  IBeachRepository,
} from '@/modules/beach/domain/repositories/IBeachRepository';
import { Beach } from '../../domain/entities/Beach';

export class BeachMemoryRepository implements IBeachRepository {
  private beachs: IBeach[] = [];

  async create(beach: Beach): Promise<IBeach> {
    const beachData = new Beach(
      beach.name,
      beach.position,
      beach.lat,
      beach.lng,
      beach.rating,
      beach.favorite,
    );

    const newBeach = Object.assign({ id: v4() }, beachData);

    this.beachs.push(newBeach);

    return newBeach;
  }

  async findAll(): Promise<IBeach[]> {
    return this.beachs;
  }

  async findById(id: string): Promise<IBeach> {
    return this.beachs.find((beach) => beach.id === id);
  }

  async findByName(name: string): Promise<IBeach> {
    return this.beachs.find((beach) => beach.name === name);
  }
}
