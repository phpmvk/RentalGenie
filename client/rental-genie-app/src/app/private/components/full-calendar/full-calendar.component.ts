import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {

  @Input() currentEvents: any[] = [];

  ngOnInit(): void {
    //not sure if this is the best approach to this, but I am still running into rendering time issues with calendar not having the events from storage
    setTimeout(() => {
      this.calendarOptions.events = this.currentEvents;
    }, 200);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
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
