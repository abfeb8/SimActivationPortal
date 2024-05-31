import { Component, OnInit } from '@angular/core';
import { SimActivationService } from 'src/app/services/sim-activation.service';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent implements OnInit {

  offer?: string;

  constructor(private simService: SimActivationService) { }

  ngOnInit(): void {
    this.getOffer();
  }

  getOffer() {
    this.simService.getOffers().subscribe(
      {
        next: res => this.offer = res.message
      }
    )
  }

}
