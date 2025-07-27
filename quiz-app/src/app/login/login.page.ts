import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, IonItem, IonLabel, IonText, CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }
    this.loading = true;
    try {
      // Replace with actual API call
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.loginForm.value)
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      // On success, navigate to home
      this.router.navigate(['/home']);
    } catch (err: any) {
      this.errorMessage = err.message || 'Login failed';
    } finally {
      this.loading = false;
    }
  }
} 