import { v4 as uuidv4 } from 'uuid';

export class Product {
  public readonly id: string;
  public title: string;
  public image: string;
  public artistId: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Omit<Product, 'id'>, id?: string) {
    Object.assign(this, props);
    if(!id) {
      this.id = uuidv4();
    }
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
