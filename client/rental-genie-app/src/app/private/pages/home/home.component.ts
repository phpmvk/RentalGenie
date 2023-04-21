import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { ApiClientService } from 'src/app/api-client.service';
import { AuthService } from 'src/app/auth.service';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  events!: [Event]
  imageUrls = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',   
  ]

  constructor(
    private api: ApiClientService
  ){}

  ngOnInit(){
    this.api.getAllEvents().subscribe(res => this.events = res)
  }
  
}