import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { MylistingsComponent } from './pages/mylistings/mylistings.component';
import { AddListingFormComponent } from './components/add-listing-form/add-listing-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    NavbarComponent,
    PrivateComponent,
    HomeComponent,
    AddListingComponent,
    MylistingsComponent,
    AddListingFormComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule,
  ],
  exports: [
    PrivateComponent
  ]
})
export class PrivateModule { }
