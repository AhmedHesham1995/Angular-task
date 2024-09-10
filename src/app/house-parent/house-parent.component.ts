import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { StepTwoComponent } from '../step-two/step-two.component';
import { StepThreeComponent } from '../step-three/step-three.component';
import { StepFourComponent } from '../step-four/step-four.component';
import { StepFiveComponent } from '../step-five/step-five.component';
import { StepSixComponent } from '../step-six/step-six.component';
import { LastStepComponent } from '../last-step/last-step.component';

@Component({
  selector: 'app-house-parent',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    LastStepComponent,
  ],
  templateUrl: './house-parent.component.html',
  styleUrls: ['./house-parent.component.css'],
})
export class HouseParentComponent {
  currentStep = 1;

  houseData: { selectedBox: number | null; projectName: string } | null = null;
  locationData: string | null = null;
  houseType: string | null = null;
  additionalData: any = null;
  additionalDataPlus: any = null;

  handleHouseData(event: {
    selectedBox: number | null;
    projectName: string;
  }): void {
    if (event.selectedBox && event.projectName) {
      this.houseData = event;
      this.currentStep = 2;
    } else {
      console.error('Validation failed, cannot move to the next step');
    }
    console.log('Received house data:', event);
  }

  handleLocationSelected(location: string): void {
    if (location) {
      this.locationData = location;
      this.currentStep = 3;
    } else {
      console.error('Location not selected, cannot move to the next step');
    }
    console.log('Selected location:', location);
  }

  handleHouseTypeSelected(houseType: string): void {
    if (houseType) {
      this.houseType = houseType;
      this.currentStep = 4;
    } else {
      console.error('House type not selected, cannot move to the next step');
    }
    console.log('Selected house type:', houseType);
  }

  handleAdditionalData(data: any): void {
    if (data) {
      this.additionalData = data;
      this.currentStep = 5;
    } else {
      console.error(
        'Additional data not provided, cannot move to the next step'
      );
    }
    console.log('Additional data:', data);
  }

  handleAdditionalDataPlus(data: any): void {
    if (data) {
      this.additionalDataPlus = data;
      this.currentStep = 6;
    } else {
      console.error(
        'Additional data plus not provided, cannot move to the next step'
      );
    }
    console.log('Additional data plus:', data);
  }

  handleProgressComplete(): void {
    this.currentStep = 7;
    console.log('Progress complete, navigating to last step');
  }

  // goToStep(step: number): void {
  //   if (step >= 1 && step <= 7) {
  //     this.currentStep = step;
  //   } else {
  //     console.error('Invalid step number');
  //   }
  // }

  navigateBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
