import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SimVerificationModel } from 'src/app/models/simVerification';
import { User } from 'src/app/models/user';
import { SimActivationService } from 'src/app/services/sim-activation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sim-validation',
  templateUrl: './sim-validation.component.html',
  styleUrls: ['./sim-validation.component.css']
})
export class SimValidationComponent implements OnInit {

  simVerificationForm!: FormGroup
  showMsg: boolean = false;
  message: string = "";

  constructor(
    private fb: FormBuilder,
    private simActivationService: SimActivationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.simVerificationForm = this.fb.group(
      {
        simNumber: ["", [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
        serviceNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
      }
    )
  }

  verifySim() {
    console.log(this.simVerificationForm.value)

    this.simActivationService.verifySim(new SimVerificationModel(this.simVerificationForm.value.simNumber, this.simVerificationForm.value.serviceNumber)).subscribe(
      {
        next: res => {
          console.log("Verify SIM", res);

          this.showMsg = true;
          if (res.isVerified) {
            this.userService.setUserId(res.userID);
            this.simActivationService.isSimVerified = true;
            this.router.navigate(["/special-offer"]);

            console.log(this.userService.userId);

          }
          this.message = res.message;

        }
      }
    )
  }
}
