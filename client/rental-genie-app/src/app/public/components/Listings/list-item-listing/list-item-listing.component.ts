import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PublicListing } from 'src/app/types';

@Component({
  selector: 'app-list-item-listing',
  templateUrl: './list-item-listing.component.html',
  styleUrls: ['./list-item-listing.component.css']
})
export class ListItemListingComponent {

  //remember to adjust types!
  @Input()
  listing!: PublicListing

  constructor(
    private router: Router
  ){}

  onListItemListingComponentClick(){
    this.router.navigate(['/public/listing-detail',this.listing._id])
  }

}
