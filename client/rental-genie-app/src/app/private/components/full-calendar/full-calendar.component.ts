import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-full-calendar',
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>
  `,
  styles: [
    `
    full-calendar {
      border-radius: 10px;
      padding: 10px;
      height: 95vh;
      background-color: var(--bg-tertiary);
    }
    `
  ]
})
export class FullCalendarComponent implements OnInit {

  @Input() currentEvents: Event[] = [];

  ngOnInit(): void {
    //not sure if this is the best approach to this, but I am still running into rendering time issues with calendar not having the events from storage
    setTimeout(() => {
      this.calendarOptions.events = this.currentEvents;
    }, 200);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    allDaySlot: false,
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'today prev next'
    },
    plugins: [
      dayGridPlugin,
      timeGridPlugin
    ],
    events: '',
    displayEventEnd: false,
    weekends: true,
    businessHours: {
      daysOfWeek: [1,2,3,4,5],
      startTime: '08:00',
      endTime: '18:00'
    }
  };


}
