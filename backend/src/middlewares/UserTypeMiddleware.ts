import { NextFunction, Request, Response } from 'express';

export default function isAdmin(req: Request, res: Response, next: NextFunction) {
  const userType = req.userType;
  if(userType !== 'ADMIN') {
    return res.status(401).json({ message: 'Access denied.'});
  }
  next();
}
