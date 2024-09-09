import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-six',
  standalone: true,
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.css'],
})
export class StepSixComponent implements OnInit {
  @Input() currentProgress: number = 0;
  @Input() maxProgress: number = 100;

  @Output() progressComplete = new EventEmitter<void>();

  private interval: any;

  constructor() {}

  ngOnInit(): void {
    this.simulateProgress();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private simulateProgress(): void {
    this.currentProgress = 0;
    this.interval = setInterval(() => {
      if (this.currentProgress >= this.maxProgress) {
        clearInterval(this.interval);
        this.onProgressComplete();
      } else {
        this.currentProgress += 1;
      }
    }, 100);
  }

  private onProgressComplete(): void {
    this.progressComplete.emit();
    console.log('Progress complete');
  }
}
