import { ListUsersController } from './ListUsersController';
import { ListUsersUseCase } from './ListUsersUseCase';
import { MongoUsersRepository } from './../../repositories/implementations/MongoUsersRepository';

const mongoUsersRepository = new MongoUsersRepository();

const listUsersUseCase = new ListUsersUseCase(
  mongoUsersRepository
);

const listUsersController = new ListUsersController(
  listUsersUseCase
);

export { listUsersUseCase, listUsersController };
