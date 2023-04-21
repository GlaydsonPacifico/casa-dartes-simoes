import { Request, Response } from 'express';
import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
  constructor(
    private listUsersUseCase: ListUsersUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.listUsersUseCase.execute();

      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unecxpected Error.'});
    }
  }
}
