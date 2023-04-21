import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { IFileStorageRepository } from '../IFileStorageRepository';

const s3Client  = new S3Client({
  region: `${process.env.REGION}`,
  credentials: {
    accessKeyId: `${process.env.ACCESS_KEY}`,
    secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`,
  },
});

export class AWSFileStorageRepository implements IFileStorageRepository {
  async uploadFile(fileBuffer: Buffer): Promise<string> {
    const key = uuidv4();
    const params = {
      Bucket: 'images-atelie',
      Key: `uploads/${key}`,
      Body: fileBuffer,
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    return `https://images-atelie.s3.${process.env.REGION}.amazonaws.com/${params.Key}`;
  }
}

