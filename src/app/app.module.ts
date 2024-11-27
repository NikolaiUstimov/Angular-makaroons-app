import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {ProductsComponent} from './components/products/products.component';
import {ButtonEffectsDirective} from './directives/button-effects.directive';
import { PhoneCustomPipe } from './pipes/phone-custom.pipe';
import { TextMiniCustomPipe } from './pipes/text-mini-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    ButtonEffectsDirective,
    PhoneCustomPipe,
    TextMiniCustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgClass
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-RU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
