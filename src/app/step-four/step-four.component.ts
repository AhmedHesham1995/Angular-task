import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  navigateToStepFive(): void {
    this.additionalData.emit({
      shortDescription: this.shortDescription,
      detailedDescription: this.detailedDescription,
    });
  }
}
