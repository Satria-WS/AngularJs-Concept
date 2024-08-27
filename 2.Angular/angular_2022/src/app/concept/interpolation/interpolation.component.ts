import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {

  showButton = false;

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

  isShow(): void {
    console.log('hello world');
    this.showButton = true;
  }

}
