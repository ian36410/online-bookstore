import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);
  loginError = signal('');

  loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
  });

  onSubmit(): void{
    this.loginError.set('');
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    const loginInfo = this.loginForm.getRawValue();
    const isLoggedIn = this.authService.login(loginInfo.username, loginInfo.password);
    if(isLoggedIn){
      this.router.navigate(['/home'])
    }
    else{
      this.loginError.set('帳號或密碼錯誤');
    }
  }
}
