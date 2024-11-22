import {Component} from '@angular/core';
import {ProductInterface} from "./interface/product.interface";
import {AdvantageInterface} from "./interface/advantage.interface";
import {ContactInfoInterface} from "./interface/contact-info.interface";
import {InputElementsInterface} from "./interface/input-elements.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
  public products: ProductInterface[] = [
    {
      image: 'macaroon_1.png',
      title: 'Макарун с малиной',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'macaroon_2.png',
      title: 'Макарун с манго',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'macaroon_3.png',
      title: 'Пирог с ванилью',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'macaroon_4.png',
      title: 'Пирог с фисташками',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
  ];

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
  public orderEvent(product: ProductInterface, element: HTMLElement ): void {
    element.scrollIntoView({behavior: 'smooth'});
    this.formInputValues.productTitle = product.title.toUpperCase();
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
  }

  //Переменная для отображения подарка
  public showPresent: boolean = false;

  //Объект для телефона и ссылок
  public contactInfo: ContactInfoInterface = {
    phone: '+375 (29) 368-98-68',
    hrefLink: 'https://instagram.com/',
    hrefPone: 'tel:+375293689868'
  }

  //Активация бургер меню
  public isOpenMenu: boolean = false;

  public changeMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
