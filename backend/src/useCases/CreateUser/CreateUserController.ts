import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, userType, favoriteProducts, createdAt, updatedAt } = req.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
        userType,
        favoriteProducts,
        createdAt,
        updatedAt,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexcpected Error.'});
    }
  }
}
