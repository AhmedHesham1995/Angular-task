import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
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
      this.router.navigate(['/step-four']);
    }
  }
}
