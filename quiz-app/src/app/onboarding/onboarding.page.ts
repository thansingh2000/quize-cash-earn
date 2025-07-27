import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, CommonModule]
})
export class OnboardingPage implements OnInit {
  currentSlide = 0;
  totalSlides = 3;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextSlide() {
    if (this.currentSlide === this.totalSlides - 1) {
      // Last slide - complete onboarding
      this.completeOnboarding();
    } else {
      // Move to next slide
      this.currentSlide++;
    }
  }

  skipOnboarding() {
    this.completeOnboarding();
  }

  private completeOnboarding() {
    // Save onboarding completion status
    localStorage.setItem('onboardingCompleted', 'true');
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
