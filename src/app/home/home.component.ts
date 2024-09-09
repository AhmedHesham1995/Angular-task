// // import { NgClass, NgIf, NgStyle } from '@angular/common';
// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // @Component({
// //   selector: 'app-home',
// //   standalone: true,
// //   imports: [NgClass, NgIf, NgStyle],
// //   templateUrl: './home.component.html',
// //   styleUrl: './home.component.css',
// // })
// // export class HomeComponent {
// //   selectedBox: number | null = null;

// //   selectBox(boxNumber: number): void {
// //     this.selectedBox = boxNumber;
// //   }

// //   isBoxSelected(): boolean {
// //     return this.selectedBox === 1 || this.selectedBox === 2;
// //   }

// // }

// import { NgClass, NgIf, NgStyle } from '@angular/common';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { log } from 'console';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [NgClass, NgIf, NgStyle, FormsModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'], // Fixed typo: styleUrl to styleUrls
// })
// export class HomeComponent {
//   selectedBox: number | null = null;

//   constructor(private router: Router) {}

//   selectBox(boxNumber: number): void {
//     this.selectedBox = boxNumber;
//   }

//   isBoxSelected(): boolean {
//     return this.selectedBox === 1 || this.selectedBox === 2;
//   }

//   navigateToStepTwo(): void {
//     if (this.isBoxSelected()) {
//       this.router.navigate(['/step-two']);
//     }
//   }
// }

// import { NgClass, NgIf, NgStyle } from '@angular/common';
// import { Component, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [NgClass, NgIf, NgStyle, FormsModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent {
//   selectedBox: number | null = null;
//   projectName: string = '';

//   @Output() emitHouseData = new EventEmitter<{
//     selectedBox: number | null;
//     projectName: string;
//   }>();

//   constructor(private router: Router) {}

//   selectBox(boxNumber: number): void {
//     this.selectedBox = boxNumber;
//   }

//   isBoxSelected(): boolean {
//     return this.selectedBox === 1 || this.selectedBox === 2;
//   }

//   navigateToStepTwo(): void {
//     if (this.isBoxSelected() && this.projectName.trim()) {
//       this.emitHouseData.emit({
//         selectedBox: this.selectedBox,
//         projectName: this.projectName,
//       });
//       this.router.navigate(['/step-two']);
//     }
//   }
// }

import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedBox: number | null = null;
  projectName: string = '';

  @Output() emitHouseData = new EventEmitter<{
    selectedBox: number | null;
    projectName: string;
  }>();

  constructor(private router: Router) {}

  selectBox(boxNumber: number): void {
    this.selectedBox = boxNumber;
  }

  isBoxSelected(): boolean {
    return this.selectedBox === 1 || this.selectedBox === 2;
  }

  navigateToStepTwo(): void {
    if (this.isBoxSelected() && this.projectName.trim()) {
      this.emitHouseData.emit({
        selectedBox: this.selectedBox,
        projectName: this.projectName,
      });
      this.router.navigate(['/step-two']);
    }
  }
}
