import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdValidationComponent } from './id-validation.component';

describe('IdValidationComponent', () => {
  let component: IdValidationComponent;
  let fixture: ComponentFixture<IdValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
