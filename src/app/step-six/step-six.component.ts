import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-six',
  standalone: true,
  imports: [],
  templateUrl: './step-six.component.html',
  styleUrl: './step-six.component.css',
})
export class StepSixComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/step-five']);
  }

  @Input() currentProgress: number = 50;
  @Input() maxProgress: number = 100;
}
