import { Request, Response } from 'express';
import { CreateArtistUseCase } from './CreteArtistUseCase';

export class CreateArtistController {
  constructor(
    private createArtistUseCase: CreateArtistUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, specialty, description, products, createdAt, updatedAt } = req.body;

    try {
      const product = await this.createArtistUseCase.execute({
        name,
        specialty,
        description,
        products,
        createdAt,
        updatedAt,
      });

      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexcpected Error.'});
    }
  }
}
