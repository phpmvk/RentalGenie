import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // fix types!!
  allListings: any = []

  constructor(
    private api: ApiClientService
  ){}

  ngOnInit(){
    this.getAll()
  }


  getAll(){
    this.api.getAllListings().subscribe(res => {
      this.allListings = res;
      //maybe add a sort by date added? Need to create that property on the data too
    })
  }
}
