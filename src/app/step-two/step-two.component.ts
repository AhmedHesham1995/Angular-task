import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

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
  @Output() back = new EventEmitter<void>();

  selectBox(boxNumber: number): void {
    this.selectedBox = boxNumber;
  }

  isBoxSelected(): boolean {
    return this.selectedBox !== null;
  }

  navigateToStepThree(): void {
    if (this.isBoxSelected()) {
      this.emitLocation();
    }
  }

  emitLocation(): void {
    let location = '';
    switch (this.selectedBox) {
      case 1:
        location = 'القاهرة';
        break;
      case 2:
        location = 'الساحل الشمالي';
        break;
      case 3:
        location = 'دهب';
        break;
      default:
        location = '';
    }
    this.locationSelected.emit(location);
  }

  navigateBack(): void {
    this.back.emit();
  }
}
