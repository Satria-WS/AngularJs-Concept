import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, CartComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular_2022';


  // ngOnInit(): void {
  //   initializeApp(firebaseConfig);
  // }

  constructor(private authService: AuthService) { }



  ngOnInit(): void {
    initializeApp(firebaseConfig);
    console.log({ firebaseConfig: initializeApp(firebaseConfig) });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    return this.authService.logout();
  }
}
