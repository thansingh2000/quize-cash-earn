import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, IonItem, IonLabel, IonText, CommonModule, ReactiveFormsModule, RouterModule]
})
export class RegisterPage {
  registerForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    this.errorMessage = '';
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }
    this.loading = true;
    try {
      // Replace with actual API call
      const response = await fetch('https://your-backend-api.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.registerForm.value)
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      // On success, navigate to login
      this.router.navigate(['/login']);
    } catch (err: any) {
      this.errorMessage = err.message || 'Registration failed';
    } finally {
      this.loading = false;
    }
  }
} 