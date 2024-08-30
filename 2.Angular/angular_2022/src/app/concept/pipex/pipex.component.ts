import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BooksService } from '../../books/books.service';
import { Book } from '../../types/Book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pipex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipex.component.html',
  styleUrl: './pipex.component.css',
})
export class PipexComponent implements OnInit {
  books: Book[] = [];
  @Input() childData: string | undefined;
  @Output() newItemEvent = new EventEmitter<string>();


  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
