import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressDetailsComponent } from './customer-address-details.component';

describe('CustomerAddressDetailsComponent', () => {
  let component: CustomerAddressDetailsComponent;
  let fixture: ComponentFixture<CustomerAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
