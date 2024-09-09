// import { NgClass } from '@angular/common';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-three',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './step-three.component.html',
//   styleUrls: ['./step-three.component.css'],
// })
// export class StepThreeComponent {
//   selectedBox: number | null = null;

//   constructor(private router: Router) {}

//   selectBox(boxNumber: number): void {
//     this.selectedBox = boxNumber;
//   }

//   isBoxSelected(): boolean {
//     return this.selectedBox !== null;
//   }

//   navigateToHome(): void {
//     this.router.navigate(['/step-two']);
//   }

//   navigateToStepFour(): void {
//     if (this.isBoxSelected()) {
//       this.router.navigate(['/step-four']);
//     }
//   }
// }

import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent {
  selectedBox: number | null = null;

  // Add an output property to emit the selected house type
  @Output() houseTypeSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  selectBox(boxNumber: number): void {
    this.selectedBox = boxNumber;
  }

  isBoxSelected(): boolean {
    return this.selectedBox !== null;
  }

  navigateToHome(): void {
    this.router.navigate(['/step-two']);
  }

  navigateToStepFour(): void {
    if (this.isBoxSelected()) {
      this.emitHouseType(); // Emit the house type when navigating to the next step
      this.router.navigate(['/step-four']);
    }
  }

  emitHouseType(): void {
    // Emit the selected house type based on the selected box number
    let houseType = '';
    switch (this.selectedBox) {
      case 1:
        houseType = 'فيلا'; // Villa
        break;
      case 2:
        houseType = 'شقة سكنية'; // Flat
        break;
      case 3:
        houseType = 'شقة دوبليكس'; // Duplex
        break;
      default:
        houseType = '';
    }
    this.houseTypeSelected.emit(houseType);
    // console.log(houseType);
  }
}
