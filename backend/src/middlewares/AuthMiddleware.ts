import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
  userType: string;
}

export default async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  if(!token) {
    return res.status(400).json({ error: 'Token no provided.'});
  }

  try {
    const data = jwt.verify(token, process.env.SECRET);

    const { userId, userType } = data as TokenPayload;

    req.userId = userId;
    req.userType = userType;

    return next();
  } catch (err) {
    return res.sendStatus(401);
  }
}
