import { Beach } from '../entities/Beach';

export interface IBeach {
  id: string;
  name: string;
  position: string;
  lat: number;
  lng: number;
}

export interface IBeachRepository {
  create(beach: Beach): Promise<IBeach>;
  findAll(): Promise<IBeach[]>;
  findByName(name: string): Promise<IBeach>;
}
