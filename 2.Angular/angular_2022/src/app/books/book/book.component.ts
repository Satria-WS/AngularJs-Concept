import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../types/Book';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;
}
