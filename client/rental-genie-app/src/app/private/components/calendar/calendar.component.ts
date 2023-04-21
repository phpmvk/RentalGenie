import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ApiClientService } from 'src/app/api-client.service';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() view!: string
  @Input() currentEvents!: [Event]

  constructor(
    private api: ApiClientService
    ){}
    
  ngOnInit(): void {
    console.log(this.view)
    this.api.getAllEvents().subscribe(res => {
      this.calendarOptions.events = res
      this.currentEvents = res;
    })
  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridThreeDay',
    headerToolbar: {
      right: 'prev next today',
      center: 'title',
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
