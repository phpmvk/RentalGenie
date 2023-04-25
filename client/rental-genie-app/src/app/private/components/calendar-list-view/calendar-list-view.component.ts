import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-calendar-list-view',
  templateUrl: './calendar-list-view.component.html',
  styleUrls: ['./calendar-list-view.component.css']
})
export class CalendarListViewComponent {

  currentEvents!: Event[]

  constructor(
    private api: ApiClientService,
    private pStore: PrivateStore,
  ){}

  ngOnInit(): void {
    this.getAllEvents()
  }

  getAllEvents(){
    const privateStoreEvents = this.pStore.getPrivateEvents();
    if (privateStoreEvents.length > 0) {
      console.log('ALL EVENTS GOT through PRIVATE STORE')
      this.currentEvents = privateStoreEvents
      this.calendarOptions.events = privateStoreEvents
    } else {
      console.log('ALL EVENTS GOT through API')
      this.api.getAllEvents().subscribe(res => {
        this.pStore.setPrivateEvents(res);
        this.currentEvents = res;
        this.calendarOptions.events = res;
      });
    };
  }

  calendarOptions: CalendarOptions = {
    initialView: 'listDay',
    plugins: [
      listPlugin,
    ],
    events: '',
    weekends: true,
    defaultRangeSeparator: ' - ',
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: true,
    },
    displayEventEnd: false
  };

}
