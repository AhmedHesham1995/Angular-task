import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-four',
  standalone: true,
  imports: [],
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.css',
})
export class StepFourComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/step-three']);
  }

  navigateToStepFive(): void {
    this.router.navigate(['/step-five']);
  }
}
