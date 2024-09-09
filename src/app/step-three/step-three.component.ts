import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent {
  selectedBox: number | null = null;

  @Output() houseTypeSelected = new EventEmitter<string>();

  selectBox(boxNumber: number): void {
    this.selectedBox = boxNumber;
  }

  isBoxSelected(): boolean {
    return this.selectedBox !== null;
  }

  navigateToStepFour(): void {
    if (this.isBoxSelected()) {
      this.emitHouseType();
    }
  }

  emitHouseType(): void {
    let houseType = '';
    switch (this.selectedBox) {
      case 1:
        houseType = 'فيلا';
        break;
      case 2:
        houseType = 'شقة سكنية';
        break;
      case 3:
        houseType = 'شقة دوبليكس';
        break;
      default:
        houseType = '';
    }
    this.houseTypeSelected.emit(houseType);
    // console.log(houseType);
  }
}
