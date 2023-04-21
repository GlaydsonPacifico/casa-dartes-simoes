import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository';
import { IAuthenticateUserRequestDTO } from './AuthenticateUserDTO';

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: MongoUsersRepository
  ) {}

  async execute(data: IAuthenticateUserRequestDTO) {
    const user = await this.userRepository.findByEmail(data.email);

    if(!user) {
      throw new Error('User not found.');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if(!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, userType: user.userType }, process.env.SECRET, {
      expiresIn: 21600,
    });

    return { user, token };
  }
}
