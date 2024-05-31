import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { SimValidationComponent } from './components/sim-validation/sim-validation.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { CustomerValidationComponent } from './components/customer-validation/customer-validation.component';
import { CustomerPersonalDetailsComponent } from './components/customer-personal-details/customer-personal-details.component';
import { CustomerAddressDetailsComponent } from './components/customer-address-details/customer-address-details.component';
import { IdValidationComponent } from './components/id-validation/id-validation.component';
import { SuccessComponent } from './components/success/success.component';
import { ThanksComponent } from './components/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimValidationComponent,
    SpecialOfferComponent,
    CustomerValidationComponent,
    CustomerPersonalDetailsComponent,
    CustomerAddressDetailsComponent,
    IdValidationComponent,
    SuccessComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
