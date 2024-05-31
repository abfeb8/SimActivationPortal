import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SimActivationService } from './sim-activation.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private simActivatoinService: SimActivationService, private router: Router) { }
  canActivate(): boolean {
    if (this.simActivatoinService.isSimVerified) {
      return true;
    }
    this.router.navigate(["/"]);
    return false;
  }
}
