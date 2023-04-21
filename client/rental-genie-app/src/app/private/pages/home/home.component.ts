import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event[] = [];

  listings: any[] = [];

  imageUrls = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ]

  constructor(
    private api: ApiClientService,
    private pStore: PrivateStore,
  ){}

  ngOnInit(){
    //used setTimeout so that home component would not make simultaneous API request along with calendar component before anything is stored in private store
    setTimeout(() => {
      this.getAllEvents();
    }, 200)
  }
  
  getAllEvents(){
    const privateStoreEvents = this.pStore.getPrivateEvents();
    if (privateStoreEvents.length > 0) {
      console.log('ALL EVENTS GOT through PRIVATE STORE')
      this.events = privateStoreEvents
    } else {
      console.log('ALL EVENTS GOT through API')
      this.api.getAllEvents().subscribe(res => {
        this.pStore.setPrivateEvents(res);
        this.events = res;
      });
    };
  };
  
  // getAllListings(){
  //   const privateStoreListings = this.pStore.getPrivateListings();
  //   if (privateStoreListings.length > 0) {
  //     this.listings = privateStoreListings
  //   } else {
  //     console.log('you need to set up the API request to get all agent listings')
  //   }
  // }
}