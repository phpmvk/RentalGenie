import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Store {

  private allListings: any[] = []

  constructor(){}

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