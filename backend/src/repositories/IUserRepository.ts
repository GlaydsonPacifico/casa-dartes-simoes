import { User } from '../entities/User';

export interface IUserRepository {
  save(props: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
}
