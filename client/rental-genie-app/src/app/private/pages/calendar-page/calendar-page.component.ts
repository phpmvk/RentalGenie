import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {

  currentEvents!: any[];

  constructor(
    private pStore: PrivateStore,
    private api: ApiClientService,
  ){}

  ngOnInit(): void {
    this.findEvents();
    if (this.currentEvents.length < 1) {
      console.log('making API request for events')
      this.api.getAllEvents().subscribe(res => this.currentEvents = res)
    }
  };

  findEvents(){
    const result = this.pStore.getPrivateEvents()
    console.log('found these events: ', result)
    this.currentEvents = result;
  };

}
