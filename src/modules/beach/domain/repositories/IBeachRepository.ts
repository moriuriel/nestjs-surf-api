import { IPagination } from '@/common/decorators/getPagination';
import { Beach } from '../entities/Beach';

export interface IBeach {
  id: string;
  name: string;
  position: string;
  lat: number;
  lng: number;
}

export interface IFindAllBeachReponse {
  total: number;
  beachs: IBeach[];
}

export interface IBeachRepository {
  create(beach: Beach): Promise<IBeach>;
  findAll(pagination: IPagination): Promise<IFindAllBeachReponse>;
  findByName(name: string): Promise<IBeach>;
  findById(id: string): Promise<IBeach>;
}
