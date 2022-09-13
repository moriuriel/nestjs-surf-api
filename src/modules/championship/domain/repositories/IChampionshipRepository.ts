import { Championship } from '../entities/Championship';

export interface IChampionship {
  id: string;
  name: string;
  event_date: Date;
  beach_id: string;
  status: string;
  createdAt: Date;
}
export interface IChampionshipRepository {
  create(championship: Championship): Promise<IChampionship>;
}
