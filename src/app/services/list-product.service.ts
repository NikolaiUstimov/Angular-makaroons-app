import {Injectable} from '@angular/core';
import {ProductInterface} from "../interface/product.interface";

@Injectable()
export class ListProductService {

  constructor() { }

  getAllProducts(): ProductInterface[] {
    return [
      {
        image: 'macaroon_1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon_2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon_3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon_4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70
      },
    ];
  }
}
