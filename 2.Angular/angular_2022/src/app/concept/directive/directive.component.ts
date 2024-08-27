import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  isShow = true;

  handleClick() {
    console.log('hello directive')
    this.isShow = !this.isShow;
  }


  books = [
    {
      name: 'clean code',
      author: 'Robert C martin',
      src: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY466_.jpg'
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      src: 'https://m.media-amazon.com/images/I/71f1jieYHNL._SY466_.jpg'
    },
    {
      name: 'Clean Architecture',
      author: 'Robert Martin ',
      src: 'https://m.media-amazon.com/images/I/61r4tYVsRVL._SY466_.jpg'
    }
  ]
}
