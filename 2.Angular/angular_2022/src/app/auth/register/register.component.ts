import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterForm } from '../../types/Auth';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    return;
  }

  submit() {

   return this.authService.register(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
