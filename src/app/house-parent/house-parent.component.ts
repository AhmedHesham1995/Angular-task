// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrl: './house-parent.component.css',
// })
// export class HouseParentComponent {}

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'], // Fixed typo: styleUrl to styleUrls
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     // Storing the emitted data from the child component
//     this.houseData = event;
//     console.log('Received from child:', this.houseData);
//     // You can now manage steps or pass data to other components as needed
//   }

// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   selectedLocation: string | null = null;

//   handleHouseData(event: { selectedBox: number | null; projectName: string }): void {
//     this.houseData = event;
//     console.log('Received house data:', this.houseData);
//   }

//   handleLocationSelected(location: string): void {
//     this.selectedLocation = location;
//     console.log('Selected location:', this.selectedLocation);
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'], // Corrected the typo in `styleUrls`
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   selectedLocation: string | null = null;

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     // Handling data emitted from HomeComponent
//     this.houseData = event;
//     console.log('Received house data:', this.houseData);
//     // Further logic for handling house data can be added here
//   }

//   handleLocationSelected(location: string): void {
//     // Handling location selected from StepTwoComponent
//     this.selectedLocation = location;
//     console.log('Selected location:', this.selectedLocation);
//     // Further logic for handling selected location can be added here
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   selectedLocation: string | null = null;
//   selectedHouseType: string | null = null;
//   additionalData: any = null; // Placeholder for data from StepFiveComponent

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.houseData = event;
//     console.log('Received house data:', this.houseData);
//     // Further logic for handling house data can be added here
//   }

//   handleLocationSelected(location: string): void {
//     this.selectedLocation = location;
//     console.log('Selected location:', this.selectedLocation);
//     // Further logic for handling selected location can be added here
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.selectedHouseType = houseType;
//     console.log('Selected house type:', this.selectedHouseType);
//     // Further logic for handling house type can be added here
//   }

//   handleAdditionalData(data: any): void {
//     this.additionalData = data;
//     console.log('Additional data:', this.additionalData);
//     // Further logic for handling additional data can be added here
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   selectedLocation: string | null = null;
//   selectedHouseType: string | null = null;
//   additionalData: any = null; // Placeholder for data from StepFiveComponent

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.houseData = event;
//     console.log('Received house data:', this.houseData);
//     // Further logic for handling house data can be added here
//   }

//   handleLocationSelected(location: string): void {
//     this.selectedLocation = location;
//     console.log('Selected location:', this.selectedLocation);
//     // Further logic for handling selected location can be added here
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.selectedHouseType = houseType;
//     console.log('Selected house type:', this.selectedHouseType);
//     // Further logic for handling house type can be added here
//   }

//   handleAdditionalData(data: any): void {
//     this.additionalData = data;
//     console.log('Additional data:', this.additionalData);
//     // Further logic for handling additional data can be added here
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   selectedLocation: string | null = null;
//   selectedHouseType: string | null = null;
//   additionalData: any = null; // Placeholder for data from StepFiveComponent

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.houseData = event;
//     console.log('Received house data:', this.houseData);
//   }

//   handleLocationSelected(location: string): void {
//     this.selectedLocation = location;
//     console.log('Selected location:', this.selectedLocation);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.selectedHouseType = houseType;
//     console.log('Selected house type:', this.selectedHouseType);
//   }

//   handleAdditionalData(data: any): void {
//     this.additionalData = data;
//     console.log('Additional data:', this.additionalData);
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   selectedLocation: string | null = null;
//   selectedHouseType: string | null = null;
//   additionalData: any = null; // Placeholder for data from StepFiveComponent

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.houseData = event;
//     console.log('Received house data:', this.houseData);
//     // Possibly move to the next step if necessary
//   }

//   handleLocationSelected(location: string): void {
//     this.selectedLocation = location;
//     console.log('Selected location:', this.selectedLocation);
//     // Possibly move to the next step if necessary
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.selectedHouseType = houseType;
//     console.log('Selected house type:', this.selectedHouseType);
//     // Possibly move to the next step if necessary
//   }

//   handleAdditionalData(data: any): void {
//     this.additionalData = data;
//     console.log('Additional data:', this.additionalData);
//     // Possibly move to the next step if necessary
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   showHome = true;
//   showStepTwo = false;
//   showStepThree = false;
//   showStepFour = false;
//   showStepFive = false;
//   showStepSix = false;
//   showLastStep = false;

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.showHome = false;
//     this.showStepTwo = true;
//     console.log('Received house data:', event);
//   }

//   handleLocationSelected(location: string): void {
//     this.showStepTwo = false;
//     this.showStepThree = true;
//     console.log('Selected location:', location);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.showStepThree = false;
//     this.showStepFour = true;
//     console.log('Selected house type:', houseType);
//   }

//   handleAdditionalData(data: any): void {
//     this.showStepFour = false;
//     this.showStepFive = true;
//     console.log('Additional data:', data);
//   }

//   handleAdditionalDataPlus(data: any): void {
//     this.showStepFive = false;
//     this.showStepSix = true;
//     console.log('Additional data plus:', data);
//   }

//   // Assuming step five triggers step six
//   proceedToStepSix(): void {
//     this.showStepFive = false;
//     this.showStepSix = true;
//   }

//   // Assuming step six triggers the last step
//   completeProcess(): void {
//     this.showStepSix = false;
//     this.showLastStep = true;
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   currentStep: number = 1; // Represents the current step number

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.currentStep = 2;
//     console.log('Received house data:', event);
//   }

//   handleLocationSelected(location: string): void {
//     this.currentStep = 3;
//     console.log('Selected location:', location);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.currentStep = 4;
//     console.log('Selected house type:', houseType);
//   }

//   handleAdditionalData(data: any): void {
//     this.currentStep = 5;
//     console.log('Additional data:', data);
//   }

//   handleAdditionalDataPlus(data: any): void {
//     this.currentStep = 6;
//     console.log('Additional data plus:', data);
//   }

//   completeProcess(): void {
//     this.currentStep = 7;
//     console.log('Completing process');
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   currentStep: number = 1; // Represents the current step number

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.currentStep = 2;
//     console.log('Received house data:', event);
//   }

//   handleLocationSelected(location: string): void {
//     this.currentStep = 3;
//     console.log('Selected location:', location);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.currentStep = 4;
//     console.log('Selected house type:', houseType);
//   }

//   handleAdditionalData(data: any): void {
//     this.currentStep = 5;
//     console.log('Additional data:', data);
//   }

//   handleAdditionalDataPlus(data: any): void {
//     this.currentStep = 6;
//     console.log('Additional data plus:', data);
//   }

//   completeProcess(): void {
//     this.currentStep = 7;
//     console.log('Completing process');
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   currentStep: number = 1;

//   handleHouseData(event: { selectedBox: number | null; projectName: string }): void {
//     this.currentStep = 2;
//     console.log('Received house data:', event);
//   }

//   handleLocationSelected(location: string): void {
//     this.currentStep = 3;
//     console.log('Selected location:', location);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.currentStep = 4;
//     console.log('Selected house type:', houseType);
//   }

//   handleAdditionalData(data: any): void {
//     this.currentStep = 5;
//     console.log('Additional data:', data);
//   }

//   handleAdditionalDataPlus(data: any): void {
//     this.currentStep = 6;
//     console.log('Additional data plus:', data);
//   }

//   onProgressComplete(): void {
//     this.currentStep = 7;
//     console.log('Process completed');
//   }
// }

// import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { CommonModule } from '@angular/common';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   currentStep = 1;

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     this.currentStep = 2;
//     console.log('Received house data:', event);
//   }

//   handleLocationSelected(location: string): void {
//     this.currentStep = 3;
//     console.log('Selected location:', location);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     this.currentStep = 4;
//     console.log('Selected house type:', houseType);
//   }

//   handleAdditionalData(data: any): void {
//     this.currentStep = 5;
//     console.log('Additional data:', data);
//   }

//   handleAdditionalDataPlus(data: any): void {
//     this.currentStep = 6;
//     console.log('Additional data plus:', data);
//   }

//   handleProgressComplete(): void {
//     this.currentStep = 7;
//     console.log('Progress complete, navigating to last step');
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeComponent } from '../home/home.component';
// import { StepTwoComponent } from '../step-two/step-two.component';
// import { StepThreeComponent } from '../step-three/step-three.component';
// import { StepFourComponent } from '../step-four/step-four.component';
// import { StepFiveComponent } from '../step-five/step-five.component';
// import { StepSixComponent } from '../step-six/step-six.component';
// import { LastStepComponent } from '../last-step/last-step.component';

// @Component({
//   selector: 'app-house-parent',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HomeComponent,
//     StepTwoComponent,
//     StepThreeComponent,
//     StepFourComponent,
//     StepFiveComponent,
//     StepSixComponent,
//     LastStepComponent,
//   ],
//   templateUrl: './house-parent.component.html',
//   styleUrls: ['./house-parent.component.css'],
// })
// export class HouseParentComponent {
//   currentStep = 1;

//   houseData: { selectedBox: number | null; projectName: string } | null = null;
//   locationData: string | null = null;
//   houseType: string | null = null;
//   additionalData: any = null;
//   additionalDataPlus: any = null;

//   handleHouseData(event: {
//     selectedBox: number | null;
//     projectName: string;
//   }): void {
//     if (event.selectedBox && event.projectName) {
//       this.houseData = event;
//       this.currentStep = 2;
//     } else {
//       console.error('Validation failed, cannot move to the next step');
//     }
//     console.log('Received house data:', event);
//   }

//   handleLocationSelected(location: string): void {
//     if (location) {
//       this.locationData = location;
//       this.currentStep = 3;
//     } else {
//       console.error('Location not selected, cannot move to the next step');
//     }
//     console.log('Selected location:', location);
//   }

//   handleHouseTypeSelected(houseType: string): void {
//     if (houseType) {
//       this.houseType = houseType;
//       this.currentStep = 4;
//     } else {
//       console.error('House type not selected, cannot move to the next step');
//     }
//     console.log('Selected house type:', houseType);
//   }

//   handleAdditionalData(data: any): void {
//     if (data) {
//       this.additionalData = data;
//       this.currentStep = 5;
//     } else {
//       console.error(
//         'Additional data not provided, cannot move to the next step'
//       );
//     }
//     console.log('Additional data:', data);
//   }

//   handleAdditionalDataPlus(data: any): void {
//     if (data) {
//       this.additionalDataPlus = data;
//       this.currentStep = 6;
//     } else {
//       console.error(
//         'Additional data plus not provided, cannot move to the next step'
//       );
//     }
//     console.log('Additional data plus:', data);
//   }

//   handleProgressComplete(): void {
//     console.log('Progress complete, navigating to last step');
//     this.currentStep = 7;
//   }

//   goToStep(step: number): void {
//     if (step >= 1 && step <= 7) {
//       this.currentStep = step;
//     } else {
//       console.error('Invalid step number');
//     }
//   }

//   goBack(): void {
//     if (this.currentStep > 1) {
//       this.currentStep--;
//     }
//   }

//   goForward(): void {
//     if (this.currentStep < 7) {
//       this.currentStep++;
//     }
//   }
// }

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

  goToStep(step: number): void {
    if (step >= 1 && step <= 7) {
      this.currentStep = step;
    } else {
      console.error('Invalid step number');
    }
  }

  navigateBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goForward(): void {
    if (this.currentStep < 7) {
      this.currentStep++;
    }
  }
}
