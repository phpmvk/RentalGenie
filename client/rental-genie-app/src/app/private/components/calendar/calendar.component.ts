import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ApiClientService } from 'src/app/api-client.service';
import { PrivateStore } from 'src/app/private-store';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() view!: string
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
    initialView: 'timeGridThreeDay',
    headerToolbar: {
      right: 'prev next today',
      center: 'title',
      // left: 'hi',
      // center: 'timeGridWeek,timeGridThreeDay' // buttons for switching between views
    },
    views: {
      timeGridThreeDay: {
        type: 'timeGrid',
        duration: { days: 3 },
        buttonText: '3 day'
      }
    },
    plugins: [
      dayGridPlugin,
      timeGridPlugin
    ],
    events: '',
    // editable: true,
    // selectMirror: true,
    // selectable: true,
    weekends: true,
  };

}
