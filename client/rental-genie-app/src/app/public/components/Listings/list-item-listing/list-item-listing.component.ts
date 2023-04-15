import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item-listing',
  templateUrl: './list-item-listing.component.html',
  styleUrls: ['./list-item-listing.component.css']
})
export class ListItemListingComponent {

  //remember to adjust types!
  @Input()
  listing: any

  constructor(
    private router: Router
  ){}

  onListItemListingComponentClick(listing: any){
    this.router.navigate(['/public/listing-detail',this.listing._id])
  }

}
