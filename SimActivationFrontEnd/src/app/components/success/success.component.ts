import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SimActivationService } from 'src/app/services/sim-activation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  user!: User;
  declarationForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private activationSevice: SimActivationService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user == undefined ? new User("NA", "NA", "NA", "NA") : this.userService.user;
    this.declarationForm = this.fb.group({
      declaration: ["", [Validators.required]]
    })
  }

  submitForm() {
    this.activationSevice.activateSim().subscribe(
      {
        complete: () => this.router.navigate(['/thanks'])
      }
    )
  }

}
