import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-step',
  standalone: true,
  imports: [],
  templateUrl: './last-step.component.html',
  styleUrl: './last-step.component.css',
})
export class LastStepComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/step-six']);
  }
}
