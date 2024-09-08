// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'app-task';
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path to HomeComponent
import { StepTwoComponent } from './step-two/step-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StepTwoComponent], // Import HomeComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected to styleUrls
})
export class AppComponent {
  title = 'app-task';
}
