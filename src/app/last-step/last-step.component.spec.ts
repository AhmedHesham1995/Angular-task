import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastStepComponent } from './last-step.component';

describe('LastStepComponent', () => {
  let component: LastStepComponent;
  let fixture: ComponentFixture<LastStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
