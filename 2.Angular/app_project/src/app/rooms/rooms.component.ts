import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  HotelName:string = 'Tanginamo Hotel';
  numberOfrooms:number = 99;
  hideRooms: boolean = false;


  toogle() {
    this.hideRooms = !this.hideRooms;
  }
}
