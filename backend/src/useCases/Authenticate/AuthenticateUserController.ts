import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const user = await this.authenticateUserUseCase.execute({ email, password });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json( err.message || 'Unexcpected Error.');
    }
  }
}
