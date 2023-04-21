import { AWSFileStorageRepository } from './../../repositories/implementations/AWSFileStorageRepository';
import { UploadImageUseCase } from './../UploadImage/UploadImageUseCase';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';
import { MongoProductRepository } from './../../repositories/implementations/MongoProductsRepository';

const mongoProductRepository = new MongoProductRepository();
const aWSFileStorageRepository = new AWSFileStorageRepository();

const createProductUseCase = new CreateProductUseCase(
  mongoProductRepository,
);

const uploadImageUseCase = new UploadImageUseCase(
  aWSFileStorageRepository
);

const createProductController = new CreateProductController(
  createProductUseCase,
  uploadImageUseCase
);

export { createProductUseCase, createProductController };

