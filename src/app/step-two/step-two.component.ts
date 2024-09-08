// import { NgClass } from '@angular/common';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-step-two',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './step-two.component.html',
//   styleUrl: './step-two.component.css',
// })
// export class StepTwoComponent {
//   constructor(private router: Router) {}

//   navigateToHome(): void {
//     this.router.navigate(['']);
//   }
// }

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent {
  selectedBox: number | null = null;

  constructor(private router: Router) {}

  selectBox(boxNumber: number): void {
    this.selectedBox = boxNumber;
  }

  isBoxSelected(): boolean {
    return this.selectedBox !== null;
  }

  navigateToHome(): void {
    this.router.navigate(['']);
  }

  navigateToStepThree(): void {
    if (this.isBoxSelected()) {
      this.router.navigate(['/step-three']);
    }
  }
}
