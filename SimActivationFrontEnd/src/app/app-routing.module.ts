import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddressDetailsComponent } from './components/customer-address-details/customer-address-details.component';
import { CustomerPersonalDetailsComponent } from './components/customer-personal-details/customer-personal-details.component';
import { CustomerValidationComponent } from './components/customer-validation/customer-validation.component';
import { HomeComponent } from './components/home/home.component';
import { IdValidationComponent } from './components/id-validation/id-validation.component';
import { SimValidationComponent } from './components/sim-validation/sim-validation.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { SuccessComponent } from './components/success/success.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "sim-verification", component: SimValidationComponent },
  { path: 'special-offer', component: SpecialOfferComponent, canActivate: [RouteGuardService] },
  { path: 'customer-verification', component: CustomerValidationComponent, canActivate: [RouteGuardService] },
  { path: 'customer-personal-details', component: CustomerPersonalDetailsComponent, canActivate: [RouteGuardService] },
  { path: 'customer-address-details', component: CustomerAddressDetailsComponent, canActivate: [RouteGuardService] },
  { path: 'id-validation', component: IdValidationComponent, canActivate: [RouteGuardService] },
  { path: 'success', component: SuccessComponent, canActivate: [RouteGuardService] },
  { path: 'thanks', component: ThanksComponent, canActivate: [RouteGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
