import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository';

const mongoUsersRepository = new MongoUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  mongoUsersRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController} ;
