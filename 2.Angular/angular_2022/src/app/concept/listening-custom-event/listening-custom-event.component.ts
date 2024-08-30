import { Component } from '@angular/core';
import { ChildComponent } from './child.component';


@Component({
  selector: 'app-listening-custom-event',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './listening-custom-event.component.html',
  styleUrl: './listening-custom-event.component.css'
})
export class ListeningCustomEventComponent {
  message: string = '';

  onNotify(message: string) {
    this.message = message;
  }
}
