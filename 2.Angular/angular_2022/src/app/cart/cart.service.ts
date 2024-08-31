import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];
  constructor() { }


  helloCart() {
    console.log('Hello cart');
  }

  add(book: Book) {
    console.log({ cart: this.cart });
    this.cart.push(book)
  }

  get() {
    return this.cart;
  }

  remove(book: Book) {
    this.cart = this.cart.filter(b => b != book);
  }

}
