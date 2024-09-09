import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
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
    }
  }
}
