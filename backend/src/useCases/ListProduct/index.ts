import { ListProductsUseCase } from './ListProductsUseCase';
import { ListProductsController } from './ListProductsController';
import { MongoProductRepository } from './../../repositories/implementations/MongoProductsRepository';

const mongoProductRepository = new MongoProductRepository();

const listProductsUseCase = new ListProductsUseCase(
  mongoProductRepository
);

const listProductsController = new ListProductsController(
  listProductsUseCase
);

export { listProductsUseCase, listProductsController };
