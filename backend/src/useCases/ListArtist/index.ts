import { ListArtistsController } from './ListArtistsController';
import { ListArtistsUseCase } from './ListArtistsUseCase';
import { MongoArtistRepository } from '../../repositories/implementations/MongoArtistRepository';

const artistRepository = new MongoArtistRepository();

const listArtistsUseCase = new ListArtistsUseCase(
  artistRepository
);

const listArtistsController = new ListArtistsController(
  listArtistsUseCase
);

export { listArtistsUseCase, listArtistsController };
