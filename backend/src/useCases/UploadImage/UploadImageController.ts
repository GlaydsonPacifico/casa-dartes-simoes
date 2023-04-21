import { Request, Response } from 'express';
import { UploadImageUseCase } from './UploadImageUseCase';

export class UploadImageController {
  constructor(
    private uploadImageUseCase: UploadImageUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response>  {
    try {
      const fileUrl = await this.uploadImageUseCase.execute({
        fileBuffer: req.file.buffer
      });

      return res.status(201).json({ fileUrl });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected Error.'});
    }
  }
}

