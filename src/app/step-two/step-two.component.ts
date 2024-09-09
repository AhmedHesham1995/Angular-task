// import { NgClass } from '@angular/common';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-two',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './step-two.component.html',
//   styleUrls: ['./step-two.component.css'],
// })
// export class StepTwoComponent {
//   selectedBox: number | null = null;

//   constructor(private router: Router) {}

//   selectBox(boxNumber: number): void {
//     this.selectedBox = boxNumber;
//   }

//   isBoxSelected(): boolean {
//     return this.selectedBox !== null;
//   }

//   navigateToHome(): void {
//     this.router.navigate(['']);
//   }

//   navigateToStepThree(): void {
//     if (this.isBoxSelected()) {
//       this.router.navigate(['/step-three']);
//     }
//   }
// }

// import { NgClass } from '@angular/common';
// import { Component, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-two',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './step-two.component.html',
//   styleUrls: ['./step-two.component.css'],
// })
// export class StepTwoComponent {
//   selectedBox: number | null = null;

//   // Add an output property to emit the selected location
//   @Output() locationSelected = new EventEmitter<string>();

//   constructor(private router: Router) {}

//   selectBox(boxNumber: number): void {
//     this.selectedBox = boxNumber;
//     this.emitLocation(); // Emit the selected location whenever a box is selected
//   }

//   isBoxSelected(): boolean {
//     return this.selectedBox !== null;
//   }

//   navigateToHome(): void {
//     this.router.navigate(['']);
//   }

//   navigateToStepThree(): void {
//     if (this.isBoxSelected()) {
//       this.router.navigate(['/step-three']);
//     }
//   }

//   emitLocation(): void {
//     // Emit the selected location based on the selected box number
//     let location = '';
//     switch (this.selectedBox) {
//       case 1:
//         location = 'القاهرة'; // Cairo
//         break;
//       case 2:
//         location = 'الساحل الشمالي'; // North Coast
//         break;
//       case 3:
//         location = 'دهب'; // Dahab
//         break;
//       default:
//         location = '';
//     }
//     this.locationSelected.emit(location);
//     console.log(location);
//   }
// }

// import { NgClass } from '@angular/common';
// import { Component, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-two',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './step-two.component.html',
//   styleUrls: ['./step-two.component.css'],
// })
// export class StepTwoComponent {
//   selectedBox: number | null = null;

//   // Add an output property to emit the selected location
//   @Output() locationSelected = new EventEmitter<string>();

//   constructor(private router: Router) {}

//   selectBox(boxNumber: number): void {
//     this.selectedBox = boxNumber;
//   }

//   isBoxSelected(): boolean {
//     return this.selectedBox !== null;
//   }

//   navigateToHome(): void {
//     this.router.navigate(['']);
//   }

//   navigateToStepThree(): void {
//     if (this.isBoxSelected()) {
//       this.emitLocation(); // Emit the selected location when navigating to the next step
//       this.router.navigate(['/step-three']);
//     }
//   }

//   emitLocation(): void {
//     // Emit the selected location based on the selected box number
//     let location = '';
//     switch (this.selectedBox) {
//       case 1:
//         location = 'القاهرة'; // Cairo
//         break;
//       case 2:
//         location = 'الساحل الشمالي'; // North Coast
//         break;
//       case 3:
//         location = 'دهب'; // Dahab
//         break;
//       default:
//         location = '';
//     }
//     this.locationSelected.emit(location);
//     // console.log(location);
//   }
// }

import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() locationSelected = new EventEmitter<string>();
  @Output() back = new EventEmitter<void>(); // Add an output property to emit a back event

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
      this.emitLocation();
      this.router.navigate(['/step-three']);
    }
  }

  emitLocation(): void {
    let location = '';
    switch (this.selectedBox) {
      case 1:
        location = 'القاهرة'; // Cairo
        break;
      case 2:
        location = 'الساحل الشمالي'; // North Coast
        break;
      case 3:
        location = 'دهب'; // Dahab
        break;
      default:
        location = '';
    }
    this.locationSelected.emit(location);
  }

  navigateBack(): void {
    this.back.emit(); // Emit the back event to notify the parent component
  }
}
