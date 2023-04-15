import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { Store } from 'src/app/client-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // fix types!!
  allListings: any = []

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
      })

    }
  }
}
