import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated;
};
// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';




// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService) {}

//   canActivate() {
//     return this.authService.isAuthenticated;
//   }
// }


