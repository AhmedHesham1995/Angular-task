import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { StepFiveComponent } from './step-five/step-five.component';
import { StepSixComponent } from './step-six/step-six.component';
import { LastStepComponent } from './last-step/last-step.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'step-four', component: StepFourComponent },
  { path: 'step-five', component: StepFiveComponent },
  { path: 'step-six', component: StepSixComponent },
  { path: 'last-step', component: LastStepComponent },
];
