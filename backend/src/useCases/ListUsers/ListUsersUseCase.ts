import { User } from '../../entities/User';
import { IUserRepository } from './../../repositories/IUserRepository';

export class ListUsersUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
