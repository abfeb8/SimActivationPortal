import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from '../models/address';
import { IdentificationModel } from '../models/identification';
import { User } from '../models/user';
import { UserVerificationModel } from '../models/userVerification';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: User;
  userId: number = -1;

  userServiceUrl: string = "http://localhost:9090/user";

  constructor(private httpClient: HttpClient) { }

  setUserId(id: number) {
    this.userId = id;
  }

  verifyUser(userVerificationForm: UserVerificationModel): Observable<UserVerificationModel> {
    console.log(userVerificationForm);

    userVerificationForm.userId = this.userId;
    console.log(userVerificationForm);
    let response!: UserVerificationModel;

    return this.httpClient.post<UserVerificationModel>(`${this.userServiceUrl}/verify`, userVerificationForm);

  }

  validateUserName(fName: string, lName: string): UserVerificationModel {
    console.log("Name Validation", fName, lName, this.user);

    if (fName === this.user?.firstName && lName === this.user?.lastName) {
      return new UserVerificationModel(new User(), -1, true, "Valid User Name");
    } else {
      return new UserVerificationModel(new User(), -1, false, "Invalid User Name");
    }
  }

  validateDob(dob: string): UserVerificationModel {
    console.log("DOB validation", dob, this.user);

    if (dob === this.user?.dateOfBirth) {
      return new UserVerificationModel(new User(), -1, true, "Valid DOB");
    } else {
      return new UserVerificationModel(new User(), -1, false, "Invalid DOB");
    }
  }

  addAddress(address: Address) {
    address.userId = this.userId;
    return this.httpClient.post(`${this.userServiceUrl}/address`, address)
  }

  validateUserId(idRequest: IdentificationModel): Observable<UserVerificationModel> {
    return this.httpClient.post<UserVerificationModel>(`${this.userServiceUrl}/id-verification`, idRequest)
  }
}
