// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-six',
//   standalone: true,
//   imports: [],
//   templateUrl: './step-six.component.html',
//   styleUrl: './step-six.component.css',
// })
// export class StepSixComponent {
//   constructor(private router: Router) {}

//   navigateToHome(): void {
//     this.router.navigate(['/step-five']);
//   }

//   @Input() currentProgress: number = 50;
//   @Input() maxProgress: number = 100;
// }

// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-six',
//   standalone: true,
//   imports: [],
//   templateUrl: './step-six.component.html',
//   styleUrls: ['./step-six.component.css'],
// })
// export class StepSixComponent implements OnInit {
//   @Input() currentProgress: number = 0;
//   @Input() maxProgress: number = 100;

//   // Timer for simulating progress
//   private interval: any;

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.simulateProgress();
//   }

//   ngOnDestroy(): void {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }

//   navigateToHome(): void {
//     this.router.navigate(['/step-five']);
//   }

//   private simulateProgress(): void {
//     this.currentProgress = 0; // Initialize progress
//     this.interval = setInterval(() => {
//       if (this.currentProgress >= this.maxProgress) {
//         clearInterval(this.interval);
//         this.onProgressComplete();
//       } else {
//         this.currentProgress += 1; // Simulate progress increment
//       }
//     }, 100); // Adjust this value for faster or slower progress
//   }

//   private onProgressComplete(): void {
//     // Handle logic after progress is complete, e.g., redirect or show completion message
//     this.router.navigate(['/last-step']);
//     console.log('Progress complete');
//     // You can navigate to another route or show a success message here
//   }
// }

// import {
//   Component,
//   Input,
//   OnInit,
//   Output,
//   EventEmitter,
//   OnDestroy,
// } from '@angular/core';

// @Component({
//   selector: 'app-step-six',
//   standalone: true,
//   templateUrl: './step-six.component.html',
//   styleUrls: ['./step-six.component.css'],
// })
// export class StepSixComponent implements OnInit, OnDestroy {
//   @Input() currentProgress: number = 0;
//   @Input() maxProgress: number = 100;
//   @Output() progressComplete: EventEmitter<void> = new EventEmitter<void>();

//   // Timer for simulating progress
//   private interval: any;

//   constructor() {}

//   ngOnInit(): void {
//     this.simulateProgress();
//   }

//   ngOnDestroy(): void {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }

//   private simulateProgress(): void {
//     this.currentProgress = 0; // Initialize progress
//     this.interval = setInterval(() => {
//       if (this.currentProgress >= this.maxProgress) {
//         clearInterval(this.interval);
//         this.onProgressComplete();
//       } else {
//         this.currentProgress += 1; // Simulate progress increment
//       }
//     }, 100); // Adjust this value for faster or slower progress
//   }

//   private onProgressComplete(): void {
//     // Emit an event to notify parent component
//     this.progressComplete.emit();
//     console.log('Progress complete');
//     // Optionally, show a completion message or perform other actions
//   }
// }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-six',
  standalone: true,
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.css'],
})
export class StepSixComponent implements OnInit {
  @Input() currentProgress: number = 0;
  @Input() maxProgress: number = 100;

  @Output() progressComplete = new EventEmitter<void>();

  private interval: any;

  constructor() {}

  ngOnInit(): void {
    this.simulateProgress();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private simulateProgress(): void {
    this.currentProgress = 0; // Initialize progress
    this.interval = setInterval(() => {
      if (this.currentProgress >= this.maxProgress) {
        clearInterval(this.interval);
        this.onProgressComplete();
      } else {
        this.currentProgress += 1; // Simulate progress increment
      }
    }, 100); // Adjust this value for faster or slower progress
  }

  private onProgressComplete(): void {
    this.progressComplete.emit();
    console.log('Progress complete');
  }
}
