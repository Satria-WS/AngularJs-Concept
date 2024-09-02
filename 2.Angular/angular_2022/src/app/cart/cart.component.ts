import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}
  lengthCart = this.getCart().length > 0;

  isCart() {
    return this.getCart().length > 0;
  }
  getCart() {
    return this.cartService.get();
    // return this.cartService.helloCart();
  }
}
