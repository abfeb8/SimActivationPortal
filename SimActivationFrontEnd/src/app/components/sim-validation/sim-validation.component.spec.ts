import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimValidationComponent } from './sim-validation.component';

describe('SimValidationComponent', () => {
  let component: SimValidationComponent;
  let fixture: ComponentFixture<SimValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
