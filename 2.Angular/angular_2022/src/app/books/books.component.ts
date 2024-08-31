import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class BooksComponent implements OnInit , OnDestroy {
  books: Book[] = [];
  isShowing: boolean = true;

  constructor(private booksService: BooksService) {


  }



  ngOnInit(): void {
    console.log('ths on Init');
    this.books = this.booksService.getBooks();

  }

  ngOnDestroy(): void {
    return;
  }

  addToCard(event: Book) {
    // console.log(event)
    console.log('heelo');
  }
}
