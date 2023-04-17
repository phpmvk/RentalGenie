import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from 'src/app/client-store';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {

  listing_id: any;
  listing: any;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.getIdFromUrl()
    this.findListing(this.listing_id)
  }
  ngOnChanges(){
    this.getIdFromUrl()
    this.findListing(this.listing_id)
  }  

  getIdFromUrl(){
    this.listing_id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  findListing(id: any){
    const result = this.store.getListingById(id);
    this.listing = result;
    console.log(this.listing)
  }
}
