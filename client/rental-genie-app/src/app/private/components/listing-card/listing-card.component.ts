import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})
export class ListingCardComponent {

  @Input() thisListing: any

}
