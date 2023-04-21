import { UploadImageController } from './UploadImageController';
import { UploadImageUseCase } from './UploadImageUseCase';
import { AWSFileStorageRepository } from './../../repositories/implementations/AWSFileStorageRepository';

const awsFileStorageRepository = new AWSFileStorageRepository();

const uploadImageUseCase = new UploadImageUseCase(
  awsFileStorageRepository
);

const uploadImageController = new UploadImageController(
  uploadImageUseCase
);

export { uploadImageUseCase, uploadImageController};
