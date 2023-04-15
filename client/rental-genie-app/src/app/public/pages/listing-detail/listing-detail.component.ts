import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/client-store';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent {

  listing_id = this.activatedRoute.snapshot.paramMap.get("id");
  listing: any;


  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.findListing(this.listing_id)
  }

  findListing(id: any){
    const result = this.store.getListingById(id);
    this.listing = result;
  }
}