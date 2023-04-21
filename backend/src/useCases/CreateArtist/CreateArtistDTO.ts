import { Product } from '../../entities/Product';

export interface ICreateArtistRequestDTO {
  name: string;
  specialty: string;
  description: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}
