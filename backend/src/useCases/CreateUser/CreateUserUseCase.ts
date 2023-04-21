import bcrypt from 'bcrypt';
import { User } from './../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    const hashPassword = await bcrypt.hash(data.password, 10);

    if(userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User({
      name: data.name,
      email: data.email,
      password: hashPassword,
      userType: data.userType,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });

    return await this.userRepository.save(user);
  }
}
