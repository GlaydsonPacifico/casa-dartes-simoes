import { PrismaClient } from '@prisma/client';
import { timeStamp } from 'console';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class MongoUsersRepository implements IUserRepository {
  private prisma = new PrismaClient({});

  async save(props: User): Promise<User> {
    return await this.prisma.user.create({
      data: {
        name: props.name,
        email: props.email,
        password: props.password,
        userType: props.userType,
      },
    });
  }

  async findById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id }});
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email} }) || null;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }
}
