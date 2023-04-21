import { v4 as uuidv4 } from 'uuid';

export class FavoriteProduct {
  public readonly id: string;
  public isFavorited: boolean;
  public userId: string;
  public productId: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Omit<FavoriteProduct, 'id'>, id?: string) {
    Object.assign(this, props);
    if(!id) {
      this.id = uuidv4();
    }
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

