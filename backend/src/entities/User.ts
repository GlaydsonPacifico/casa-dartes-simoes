import { userType } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { FavoriteProduct } from './FavoriteProduct';

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;
  public userType: userType;
  public favoriteProducts?: FavoriteProduct[];
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    if(!id) {
      this.id = uuidv4();
    }
    this.favoriteProducts = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
