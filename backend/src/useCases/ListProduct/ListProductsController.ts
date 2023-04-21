import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

export class ListProductsController {
  constructor(
    private listProductsUseCase: ListProductsUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.listProductsUseCase.execute();

      return res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unecxpected Error.'});
    }
  }
}
