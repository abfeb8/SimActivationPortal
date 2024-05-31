import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-address-details',
  templateUrl: './customer-address-details.component.html',
  styleUrls: ['./customer-address-details.component.css']
})
export class CustomerAddressDetailsComponent implements OnInit {

  addressForm!: FormGroup;
  states: string[] =
    [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
    ]

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.addressForm = this.fb.group({
      address: ["", [Validators.required, Validators.maxLength(25)]],
      state: ["Andhra Pradesh", [Validators.required]],
      city: ["", [Validators.required, Validators.pattern("[A-Za-z ]*")]],
      pin: ["", [Validators.required, Validators.pattern("[0-9]{6}")]]
    })
  }

  submitAddress() {
    this.userService.addAddress(new Address
      (
        this.addressForm.value.address,
        this.addressForm.value.state,
        this.addressForm.value.city,
        this.addressForm.value.pin
      )
    ).subscribe(
      {
        complete: () => this.router.navigate(["/id-validation"])
      }
    )
  }

}
