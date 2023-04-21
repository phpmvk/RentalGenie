import { Injectable } from "@angular/core";
import { Event } from "./types";

@Injectable({
  //should this be provided only in Private module?
  providedIn: 'root'
})
export class PrivateStore {

  private allListings: any[] = [];
  private allEvents: Event[] = [];

  getPrivateListings(){
    return this.allListings;
  }

  setPrivateListings(listings: []) {
    this.allListings = listings;
  }

  getPrivateEvents() {
    return this.allEvents;
  }

  setPrivateEvents(events: Event[]) {
    this.allEvents = events;
  }

}