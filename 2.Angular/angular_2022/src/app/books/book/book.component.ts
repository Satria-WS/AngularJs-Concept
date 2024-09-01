import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../types/Book';
import { CartService } from '../../cart/cart.service';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  @Input() book: Book = {
    name: '',
    author: '',
    image: '',
    amount: 0,
  };
  @Output() emitBook = new EventEmitter<Book>();
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    return;
  }
  addToCard() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
