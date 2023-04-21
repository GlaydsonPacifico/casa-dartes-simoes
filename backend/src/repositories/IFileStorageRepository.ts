export interface IFileStorageRepository {
  uploadFile(fileBuffer: Buffer): Promise<string>;
}
