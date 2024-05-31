import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserVerificationModel } from 'src/app/models/userVerification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-validation',
  templateUrl: './customer-validation.component.html',
  styleUrls: ['./customer-validation.component.css']
})
export class CustomerValidationComponent implements OnInit {

  userValidationForm!: FormGroup;

  showMsg: boolean = false;
  message: string = "";

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userValidationForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        dateOfBirth: ["", [Validators.required]],
        declaration: ["", [Validators.required]]
      }
    )
  }

  verifyUser() {
    console.log(this.userValidationForm.value);

    const user = new User("", "", this.userValidationForm.value.dateOfBirth, this.userValidationForm.value.email);
    const request = new UserVerificationModel(user, -1);

    this.userService.verifyUser(request).subscribe(
      {
        next: res => {
          console.log(res);
          this.userService.user = res.user
          this.showMsg = true;
          if (res.isVerified) {
            this.router.navigate(["/customer-personal-details"])
          } else {
            this.message = res.message;
          }
        }
      }
    );

  }

}
