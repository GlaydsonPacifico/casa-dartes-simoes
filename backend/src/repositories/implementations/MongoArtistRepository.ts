import { PrismaClient } from '@prisma/client';
import { IArtistRepository } from '../IArtistRepository';
import { Artist } from '../../entities/Artist';

export class MongoArtistRepository implements IArtistRepository {
  private prisma = new PrismaClient({});

  async findByName(name: string): Promise<Artist | null> {
    return await this.prisma.artist.findFirst({
      where: { name: {
        equals: name
      }}
    }) || null;
  }

  async save(props: Artist): Promise<Artist> {
    return await this.prisma.artist.create({
      data: {
        name: props.name,
        specialty: props.specialty,
        description: props.description,
      }
    });
  }

  async findAll(): Promise<Artist[]> {
    return await this.prisma.artist.findMany({});
  }

}
