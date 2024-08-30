import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) { }

  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
