import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Response } from '../models/response';
import { SimVerificationModel } from '../models/simVerification';

@Injectable({
  providedIn: 'root'
})
export class SimActivationService {

  simServiceUri = "http://localhost:9090/sim"

  private simNumber!: string;
  private serviceNumber!: string;
  isSimVerified: boolean = false;

  constructor(private httpClient: HttpClient) { }

  verifySim(verificationForm: SimVerificationModel): Observable<SimVerificationModel> {
    console.log("verifying sim", verificationForm)

    this.simNumber = verificationForm.simNumber;
    this.serviceNumber = verificationForm.serviceNumber;

    return this.httpClient.post<SimVerificationModel>(`${this.simServiceUri}/verify`, verificationForm);
    // return of(new SimVerificationModel(this.simNumber, this.serviceNumber, true, "Wellcome!"));
  }

  getOffers(): Observable<Response> {
    return this.httpClient.get<Response>(`${this.simServiceUri}/offer`);
  }

  activateSim(): Observable<Response> {
    return this.httpClient.post<Response>(`${this.simServiceUri}/activate/${this.simNumber}`, null);
  }
}
