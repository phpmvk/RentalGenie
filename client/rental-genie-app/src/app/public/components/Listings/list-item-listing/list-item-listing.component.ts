import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-listing',
  templateUrl: './list-item-listing.component.html',
  styleUrls: ['./list-item-listing.component.css']
})
export class ListItemListingComponent {

  @Input()
  listing: any

}
