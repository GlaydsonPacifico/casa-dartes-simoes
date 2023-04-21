import { Artist } from '../../entities/Artist';
import { IArtistRepository } from '../../repositories/IArtistRepository';
import { ICreateArtistRequestDTO } from './CreateArtistDTO';

export class CreateArtistUseCase {
  constructor(
    private artistRepository: IArtistRepository
  ) {}

  async execute(data: ICreateArtistRequestDTO) {
    const artistAlreadyExists = await this.artistRepository.findByName(data.name);

    if(artistAlreadyExists) {
      throw new Error('Artist already exists.');
    }

    const artist = new Artist({
      name: data.name,
      specialty: data.specialty,
      description: data.description,
      products: data.products,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    });

    return await this.artistRepository.save(artist);
  }
}
