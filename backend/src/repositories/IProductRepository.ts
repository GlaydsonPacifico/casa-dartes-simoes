import { Product } from './../entities/Product';

export interface IProductRepository {
  save(props: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
}
