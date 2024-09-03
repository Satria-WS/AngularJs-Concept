import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginForm } from '../../types/Auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {


  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) { }


  submit() {
    // return;

    // if (this.isLoading) return;
    // this.isLoading = true;
    // console.log(this.form);
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, this.form.email, this.form.password)
    //   .then(userCredential => {
    //     // Signed in
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     console.log(userCredential);
    //     alert('login succes');
    //     // ...
    //   })
    //   .catch(error => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const errorCode = error.code;
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const errorMessage = error.message;
    //     alert('gagal govlok');
    //   })
    //   .finally(() => (this.isLoading = false));
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
