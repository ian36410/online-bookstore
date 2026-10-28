import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  registerForm = new FormGroup({
    name: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),

    phone: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
      ]
    }),
  });

  onSubmit(): void{
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
