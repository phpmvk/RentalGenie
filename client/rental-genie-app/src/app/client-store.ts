import { Injectable } from "@angular/core";
import { PublicListing } from "./types";

@Injectable({
  providedIn: 'root'
})
export class Store {

  private allListings: PublicListing[] = []

  getListing(){
    return this.allListings
  }

  getListingById(id: string) {
    const test = this.allListings.find(el => el._id === id);
    return test
  }

  setListings(listings: []){
    this.allListings = listings;
  }

}