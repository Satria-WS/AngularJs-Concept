import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //for call directive

import { Room, RoomList } from './room';

interface Roomx {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent {
  HotelName: string = 'Tanginamo Hotel';
  numberOfrooms: number = 99;
  hideRooms: boolean = false;

  rooms: Roomx = {
    totalRooms: 100,
    availableRooms: 19,
    bookedRooms: 4,
  };

  // empty object

  galleryItems: { src: string; type: string }[] = [];
  galleryItemx = {};
  galleryItemxx = [];
  isHas() {
    return this?.rooms?.availableRooms > 0;
  }
  roomList: RoomList[] = [
    {
      roomNumber: '1',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    },
    {
      roomNumber: '3',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.6,
    },
  ];

  toogle() {
    this.hideRooms = !this.hideRooms;
  }

}
