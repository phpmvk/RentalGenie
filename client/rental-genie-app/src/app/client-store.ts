import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Store {

  private allListings: [] = []

  constructor(){}

  getListing(){
    return this.allListings
  }

  setListings(listings: []){
    this.allListings = listings;
  }

}