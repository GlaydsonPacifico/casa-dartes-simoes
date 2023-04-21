import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';
import { UploadImageUseCase } from '../UploadImage/UploadImageUseCase';

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private uploadImageUseCase: UploadImageUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, image, artistId, createdAt, updatedAt } = req.body;

    try {
      const imageUrl = await this.uploadImageUseCase.execute({
        fileBuffer: req.file.buffer
      });

      const product = await this.createProductUseCase.execute({
        title,
        image,
        artistId,
        createdAt,
        updatedAt,
      }, imageUrl);

      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexcpected Error.'});
    }
  }
}
