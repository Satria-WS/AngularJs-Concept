import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, CartComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_2022';


  // ngOnInit(): void {
  //   initializeApp(firebaseConfig);
  // }

  isAuthenticated() {
    // return this.authService.isAuthenticated;
    return true;
  }

  logout() {
    // this.authService.logout();
    return true;
  }
}
