import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInterface} from "../../interface/product.interface";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() product!: ProductInterface;
  @Output() addProductToCartEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(public cartService: CartService) { }

  public addProductToCart(): void {
    this.cartService.count++;
    this.addProductToCartEvent.emit(this.cartService.price += this.product.price)
  }
}
