import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiCalculatorComponent } from './basi-calculator.component';

describe('BasiCalculatorComponent', () => {
  let component: BasiCalculatorComponent;
  let fixture: ComponentFixture<BasiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasiCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
