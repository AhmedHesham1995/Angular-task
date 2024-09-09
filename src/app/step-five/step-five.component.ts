// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-five',
//   standalone: true,
//   imports: [],
//   templateUrl: './step-five.component.html',
//   styleUrl: './step-five.component.css',
// })
// export class StepFiveComponent {
//   constructor(private router: Router) {}

//   navigateToHome(): void {
//     this.router.navigate(['/step-four']);
//   }

//   navigateToStepSix(): void {
//     this.router.navigate(['/step-six']);
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-five',
  standalone: true,
  templateUrl: './step-five.component.html',
  imports: [FormsModule],

  styleUrls: ['./step-five.component.css'], // Ensure this is correctly named
})
export class StepFiveComponent {
  @Output() additionalDataPlus = new EventEmitter<any>();

  selectedDesign: string | null = null;
  description: string = '';

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/step-four']);
  }

  navigateToStepSix(): void {
    this.additionalDataPlus.emit({
      design: this.selectedDesign,
      description: this.description,
    });
    this.router.navigate(['/step-six']);
  }
}
