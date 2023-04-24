import { Component, Input } from '@angular/core';
import { PublicListing } from 'src/app/types';

@Component({
  selector: 'app-individual-listing',
  templateUrl: './individual-listing.component.html',
  styleUrls: ['./individual-listing.component.css']
})
export class IndividualListingComponent {

  @Input() listingInfo!: PublicListing;

}
