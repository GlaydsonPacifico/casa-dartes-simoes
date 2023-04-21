import { Artist } from '../entities/Artist';

export interface IArtistRepository {
  save(props: Artist): Promise<Artist>;
  findAll(): Promise<Artist[]>;
  findByName(name: string): Promise<Artist>;
}
