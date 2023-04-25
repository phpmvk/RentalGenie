import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { MylistingsComponent } from './pages/mylistings/mylistings.component';
import { AddListingFormComponent } from './components/add-listing-form/add-listing-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { SharedModule } from '../shared/shared.module';
import { CalendarListViewComponent } from './components/calendar-list-view/calendar-list-view.component';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    AddListingComponent,
    MylistingsComponent,
    AddListingFormComponent,
    CalendarComponent,
    CalendarPageComponent,
    FullCalendarComponent,
    CalendarListViewComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule,
    SharedModule
  ],
  exports: [
    PrivateComponent
  ]
})
export class PrivateModule { }
