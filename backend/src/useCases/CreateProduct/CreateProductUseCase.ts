import { Product } from './../../entities/Product';
import { IProductRepository } from './../../repositories/IProductRepository';
import { ICreateProductRequestDTO } from './CreateProductDTO';

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(data: ICreateProductRequestDTO, imageUrl: string) {
    const product = new Product({
      title: data.title,
      image: imageUrl,
      artistId: data.artistId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });

    return await this.productRepository.save(product);
  }
}
