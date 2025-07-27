import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, CommonModule],
  standalone: true
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Check if onboarding is completed
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    if (!onboardingCompleted) {
      this.router.navigate(['/onboarding']);
    }
  }

  startQuiz(category: string) {
    // TODO: Navigate to quiz page with category
    console.log('Starting quiz for category:', category);
    // this.router.navigate(['/quiz', { category }]);
  }

  startRandomQuiz() {
    // TODO: Navigate to random quiz
    console.log('Starting random quiz');
    // this.router.navigate(['/quiz', { random: true }]);
  }

  viewLeaderboard() {
    // TODO: Navigate to leaderboard
    console.log('Viewing leaderboard');
    // this.router.navigate(['/leaderboard']);
  }
}
