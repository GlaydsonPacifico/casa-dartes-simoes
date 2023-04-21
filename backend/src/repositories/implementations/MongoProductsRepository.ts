import { PrismaClient } from '@prisma/client';
import { Product } from '../../entities/Product';
import { IProductRepository } from './../IProductRepository';

export class MongoProductRepository implements IProductRepository {

  private prisma = new PrismaClient({});

  async save(props: Product): Promise<Product> {
    return await this.prisma.product.create({
      data: {
        title: props.title,
        image: props.image,
        artistId: props.artistId,
      }
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany({});
  }

}
