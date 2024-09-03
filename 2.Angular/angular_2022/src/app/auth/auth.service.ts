import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }
}
