import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterForm } from '../../types/Auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };
  passwordMatched: boolean = true;

  constructor() {}

  ngOnInit(): void {
    return;
  }

  submit() {

    if (this.form.password !== this.form.confirm_password) {
      this.passwordMatched = false;
    }
    // this.authService.register(this.form);
    console.log(this.form);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then(userCredential => {
        // Signed up
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch(error => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const errorMessage = error.message;
        // ..
      });
  }

  isLoading() {
    //return this.authService.isLoading;
    return;
  }
}
