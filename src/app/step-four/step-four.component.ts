// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-four',
//   standalone: true,
//   imports: [],
//   templateUrl: './step-four.component.html',
//   styleUrl: './step-four.component.css',
// })
// export class StepFourComponent {
//   constructor(private router: Router) {}

//   navigateToHome(): void {
//     this.router.navigate(['/step-three']);
//   }

//   navigateToStepFive(): void {
//     this.router.navigate(['/step-five']);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-four',
  standalone: true,
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css'],
  imports: [CommonModule, FormsModule],
})
export class StepFourComponent {
  shortDescription: string = '';
  detailedDescription: string = '';

  @Output() additionalData = new EventEmitter<{
    shortDescription: string;
    detailedDescription: string;
  }>();

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/step-three']);
  }

  navigateToStepFive(): void {
    // Emit data before navigating to the next step
    this.additionalData.emit({
      shortDescription: this.shortDescription,
      detailedDescription: this.detailedDescription,
    });
    this.router.navigate(['/step-five']);
  }
}
