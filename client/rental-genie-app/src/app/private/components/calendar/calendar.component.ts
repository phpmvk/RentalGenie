import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-calendar',
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>
  `,
  styles: [
    `
      full-calendar {
        width: 400px;
        height: 100%;
      }
    `
  ]
})
export class CalendarComponent implements OnInit {
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
    }
  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridTwoDay',
    views: {
      timeGridTwoDay: {
        type: 'timeGrid',
        duration: { days: 2 },
        buttonText: '2 day',
        allDaySlot: false,
      },
    },
    headerToolbar: {
      start: '',
      center: '',
      end: 'today prev next'
    },
    plugins: [
      dayGridPlugin,
      timeGridPlugin
    ],
    events: '',
    weekends: true,
    defaultRangeSeparator: ' - ',
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false,
    },
    displayEventEnd: false,
  };

}
