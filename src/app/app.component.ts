import {Component} from '@angular/core';
import {ProductInterface} from "./interface/product.interface";
import {AdvantageInterface} from "./interface/advantage.interface";
import {ContactInfoInterface} from "./interface/contact-info.interface";
import {InputElementsInterface} from "./interface/input-elements.interface";
import {ListProductService} from "./services/list-product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ListProductService],
})
export class AppComponent {
  constructor(private productService: ListProductService,
              public cartService: CartService) {
  }

  //Массив преимуществ
  public advantages: AdvantageInterface[] = [
    {
      title: 'Лучшие продукты',
      desc: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      desc: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      desc: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      desc: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  //Массив продуктов
  public products: ProductInterface[] = this.productService.getAllProducts();

  //Объект для инпутов
  public formInputValues: InputElementsInterface = {
    productTitle: '',
    clientName: '',
    clientPhone: '',
    check: false
  }

  //Скролл
  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth'});
    this.isOpenMenu = false;
  }

  //Перенос названия продукта в инпут + скролл
  public addOrderEvent(price: number, product: ProductInterface, element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth'});
    this.cartService.price = price;
    this.formInputValues.productTitle += product.title.toUpperCase() + ', ';
    setTimeout((): void => {
      alert(this.formInputValues.productTitle + "добавлен в корзину");
    }, 500);
  }

  //Валидация формы заказа
  public isSubmitted: boolean = false;

  public orderDone(): void {
    this.isSubmitted = true;
    if (!this.formInputValues.productTitle) {
      return;
    }
    if (!this.formInputValues.clientName) {
      return;
    }
    if (!this.formInputValues.clientPhone) {
      return;
    }
    alert('Спасибо за заказ');
    this.isSubmitted = false;

    this.formInputValues = {
      productTitle: '',
      clientName: '',
      clientPhone: '',
      check: false
    }

    this.cartService.count = 0;
    this.cartService.price = 0;
  }

  //Объект для телефона и ссылок
  public contactInfo: ContactInfoInterface = {
    phone: '375293689868',
    hrefLink: 'https://instagram.com/',
    hrefPone: 'tel:+375293689868'
  }

  //Активация бургер меню
  public isOpenMenu: boolean = false;

  public changeMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }

  protected readonly Math = Math;
}
