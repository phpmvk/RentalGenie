import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { Store } from 'src/app/client-store';
import { PublicListing } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  // fix types!!
  allListings: PublicListing[] = []
  allCities: string[] = [];
  allDistricts: string[] = [];

  priceSortedByAscending = false;

  constructor(
    private api: ApiClientService,
    private store: Store,
  ){}

  ngOnInit(){
    this.getAll()
  }
  
  getAll(){
    const storeListings = this.store.getListing()
    if (storeListings.length > 0){
      this.allListings = storeListings;
    } else {
      this.api.getAllListings().subscribe(res => {
        this.store.setListings(res)
        this.allListings = res;
        for (const listing of this.allListings) {
          if (!this.allCities.includes(listing.city)) {
            this.allCities.push(listing.city)
          }
          if (!this.allDistricts.includes(listing.district)) {
            this.allDistricts.push(listing.district)
          }
        }
      })
    }
  }

  sortByPrice(){
    if (this.priceSortedByAscending) {
      this.allListings.sort((a,b) => a.rent_amount - b.rent_amount)
      this.priceSortedByAscending = !this.priceSortedByAscending
    } else {
      this.allListings.sort((a,b) => b.rent_amount - a.rent_amount)
      this.priceSortedByAscending = !this.priceSortedByAscending
    }
  }
}
