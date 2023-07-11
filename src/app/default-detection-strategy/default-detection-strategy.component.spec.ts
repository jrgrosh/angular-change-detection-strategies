import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDetectionStrategyComponent } from './default-detection-strategy.component';

describe('ChildComponent', () => {
  let component: DefaultDetectionStrategyComponent;
  let fixture: ComponentFixture<DefaultDetectionStrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultDetectionStrategyComponent]
    });
    fixture = TestBed.createComponent(DefaultDetectionStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
