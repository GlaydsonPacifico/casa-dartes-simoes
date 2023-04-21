import { AWSFileStorageRepository } from './../../repositories/implementations/AWSFileStorageRepository';
import { IUploadImageRequestDTO } from './UploadImageDTO';
export class UploadImageUseCase {
  constructor(
    private fileStorageRepository: AWSFileStorageRepository
  ) {}

  async execute(data: IUploadImageRequestDTO) {
    const { fileBuffer } = data;

    return await this.fileStorageRepository.uploadFile(fileBuffer);
  }
}
