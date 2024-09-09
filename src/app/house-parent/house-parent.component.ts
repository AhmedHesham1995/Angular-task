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

import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { StepTwoComponent } from '../step-two/step-two.component';
import { StepThreeComponent } from '../step-three/step-three.component';
import { StepFourComponent } from '../step-four/step-four.component';
import { StepFiveComponent } from '../step-five/step-five.component';
import { CommonModule } from '@angular/common';
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
  houseData: { selectedBox: number | null; projectName: string } | null = null;
  selectedLocation: string | null = null;
  selectedHouseType: string | null = null;
  additionalData: any = null; // Placeholder for data from StepFiveComponent

  handleHouseData(event: {
    selectedBox: number | null;
    projectName: string;
  }): void {
    this.houseData = event;
    console.log('Received house data:', this.houseData);
    // Possibly move to the next step if necessary
  }

  handleLocationSelected(location: string): void {
    this.selectedLocation = location;
    console.log('Selected location:', this.selectedLocation);
    // Possibly move to the next step if necessary
  }

  handleHouseTypeSelected(houseType: string): void {
    this.selectedHouseType = houseType;
    console.log('Selected house type:', this.selectedHouseType);
    // Possibly move to the next step if necessary
  }

  handleAdditionalData(data: any): void {
    this.additionalData = data;
    console.log('Additional data:', this.additionalData);
    // Possibly move to the next step if necessary
  }
}
