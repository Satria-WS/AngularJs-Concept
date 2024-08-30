import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule, CommonModule],
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
