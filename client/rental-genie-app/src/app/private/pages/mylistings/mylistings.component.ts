import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';

@Component({
  selector: 'app-mylistings',
  templateUrl: './mylistings.component.html',
  styleUrls: ['./mylistings.component.css']
})
export class MylistingsComponent implements OnInit {

  listings: any[] = [];

  agencyId = '111';

  constructor(
    private pStore: PrivateStore,
    private api: ApiClientService
  ){}

  ngOnInit(): void {
    this.getAllListings();
  }

  getAllListings(){
    const privateStoreListings = this.pStore.getPrivateListings();
    if (privateStoreListings.length > 0) {
      this.listings = privateStoreListings
    } else {
      this.api.getAllAgencyListingsById(this.agencyId).subscribe(res => {
        this.pStore.setPrivateListings(res);
        this.listings = res;
      })
    }
  }
}
