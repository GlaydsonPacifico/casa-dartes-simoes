import { FavoriteProduct } from '../../entities/FavoriteProduct';

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
  userType: 'USER' | 'ADMIN';
  favoriteProducts: FavoriteProduct[];
  createdAt: Date;
  updatedAt: Date;
}
