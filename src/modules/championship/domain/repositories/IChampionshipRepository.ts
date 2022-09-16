import { IBeach } from 'src/modules/beach/domain/repositories/IBeachRepository';
import { Championship } from '../entities/Championship';

export interface IChampionship {
  id: string;
  name: string;
  event_date: Date;
  beach_id: string;
  status: string;
  createdAt: Date;
  beach?: IBeach;
}

export interface IChampionshipRepository {
  create(championship: Championship): Promise<IChampionship>;
  findAllChampionships(): Promise<IChampionship[]>;
  findByName(name: string): Promise<IChampionship>;
}
