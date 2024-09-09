import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-five',
  standalone: true,
  templateUrl: './step-five.component.html',
  imports: [FormsModule],

  styleUrls: ['./step-five.component.css'],
})
export class StepFiveComponent {
  @Output() additionalDataPlus = new EventEmitter<any>();

  selectedDesign: string | null = null;
  description: string = '';

  navigateToStepSix(): void {
    this.additionalDataPlus.emit({
      design: this.selectedDesign,
      description: this.description,
    });
  }
}
