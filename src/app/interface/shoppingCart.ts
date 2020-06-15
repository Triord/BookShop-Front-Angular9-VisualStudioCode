import { Books } from './book';

export class ShoppingCart{
  livre: Books[];
  quantity: number;
  price: number;
  constructor(){
    this.livre = [];
    this.quantity = 0;
    this.price = 0;
  }
}
