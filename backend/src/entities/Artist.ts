import { Product } from './Product';
import { v4 as uuidv4 } from 'uuid';

export class Artist {
  public readonly id: string;
  public name: string;
  public specialty: string;
  public description: string;
  public products?: Product[];
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Omit<Artist, 'id'>, id?: string) {
    Object.assign(this, props);
    if(!id) {
      this.id = uuidv4();
    }
    this.products = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
