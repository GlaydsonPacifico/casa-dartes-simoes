import { CreateArtistController } from './CreateProductController';
import { CreateArtistUseCase } from './CreteArtistUseCase';
import { MongoArtistRepository } from './../../repositories/implementations/MongoArtistRepository';

const mongoArtistRepository = new MongoArtistRepository();

const createArtistUseCase = new CreateArtistUseCase(
  mongoArtistRepository
);

const createArtistController = new CreateArtistController(
  createArtistUseCase
);

export { createArtistUseCase, createArtistController};
