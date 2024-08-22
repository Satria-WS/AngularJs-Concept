import { Component } from '@angular/core';

import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoomsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
