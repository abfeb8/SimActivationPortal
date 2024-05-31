import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserVerificationModel } from 'src/app/models/userVerification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-personal-details',
  templateUrl: './customer-personal-details.component.html',
  styleUrls: ['./customer-personal-details.component.css']
})
export class CustomerPersonalDetailsComponent implements OnInit {

  email!: string;
  dateOfBirth?: string;
  showMsg: boolean = false;
  message!: string;

  personalDetailsForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.email = this.userService.user?.email == undefined ? "" : this.userService.user.email;
    this.dateOfBirth = this.userService.user?.dateOfBirth;

    this.personalDetailsForm = this.fb.group({
      title: ["Mr.", [Validators.required]],
      firstName: ["", [Validators.required, Validators.pattern("[A-Za-z]{3,15}")]],
      lastName: ["", [Validators.required, Validators.pattern("[A-Za-z]{3,15}")]],
      confirmEmail: ["", [Validators.required, Validators.pattern(this.email)]]
    })
  }

  verifyPersonalDetails() {
    console.log(this.personalDetailsForm.value);
    let res = this.userService.validateUserName(this.personalDetailsForm.value.firstName, this.personalDetailsForm.value.lastName);

    if (res.isVerified) {
      this.router.navigate(["/customer-address-details"])
    } else {
      this.showMsg = true;
      this.message = res.message
    }
  }


}
