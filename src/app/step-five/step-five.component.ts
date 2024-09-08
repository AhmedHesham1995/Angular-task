import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-five',
  standalone: true,
  imports: [],
  templateUrl: './step-five.component.html',
  styleUrl: './step-five.component.css',
})
export class StepFiveComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/step-four']);
  }

  navigateToStepSix(): void {
    this.router.navigate(['/step-six']);
  }
}
