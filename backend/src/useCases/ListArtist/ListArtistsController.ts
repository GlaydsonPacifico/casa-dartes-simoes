import { Request, Response } from 'express';
import { ListArtistsUseCase } from './ListArtistsUseCase';
export class ListArtistsController {
  constructor(
    private listArtistsUseCase: ListArtistsUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const artists = await this.listArtistsUseCase.execute();

      return res.status(200).json(artists);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unecxpected Error.'});
    }
  }
}
