import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentificationModel } from 'src/app/models/identification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-id-validation',
  templateUrl: './id-validation.component.html',
  styleUrls: ['./id-validation.component.css']
})
export class IdValidationComponent implements OnInit {

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

  idForm!: FormGroup;
  showMsg: boolean = false;
  message!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {

    this.idForm = this.fb.group(
      {
        state: ["Andhra Pradesh", [Validators.required]],
        id: ["", [Validators.required]],
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        dateOfBirth: ["", [Validators.required]]
      }
    )
  }

  validateUserId() {

    const idRequest = new IdentificationModel(this.idForm.value.id, "Aadhaar", this.idForm.value.state, this.idForm.value.firstName,
      this.idForm.value.lastName, this.idForm.value.dateOfBirth)

    console.log(idRequest);

    this.showMsg = true;
    this.userService.validateUserId(idRequest).subscribe(
      {
        next: res => {
          if (!res.isVerified) {
            this.message = res.message;
          } else {
            res = this.userService.validateDob(this.idForm.value.dateOfBirth);
            if (!res.isVerified) {
              this.message = res.message;
            } else {
              res = this.userService.validateUserName(idRequest.firstName, idRequest.lastName)
              if (!res.isVerified) {
                this.message = res.message;
              } else
                this.router.navigate(["/success"])
            }
          }
        }
      }
    )
  }
}
