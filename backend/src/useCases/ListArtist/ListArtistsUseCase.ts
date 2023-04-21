import { Artist } from '../../entities/Artist';
import { MongoArtistRepository } from '../../repositories/implementations/MongoArtistRepository';

export class ListArtistsUseCase {
  constructor(
    private artistRepository: MongoArtistRepository
  ) {}

  async execute(): Promise<Artist[]> {
    return await this.artistRepository.findAll();
  }
}
