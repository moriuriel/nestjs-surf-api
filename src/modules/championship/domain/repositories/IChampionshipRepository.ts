import { IBeach } from 'src/modules/beach/domain/repositories/IBeachRepository';
import { Championship } from '../entities/Championship';
import { IPagination } from '@/common/decorators/getPagination';

export interface IChampionship {
  id: string;
  name: string;
  event_date: Date;
  beach_id: string;
  status: string;
  createdAt: Date;
  beach?: IBeach;
}

export interface IFindAllChampionships {
  championships: IChampionship[];
  total: number;
}

export interface IChampionshipRepository {
  create(championship: Championship): Promise<IChampionship>;
  findAllChampionships(pagination: IPagination): Promise<IFindAllChampionships>;
  findByName(name: string): Promise<IChampionship>;
}
