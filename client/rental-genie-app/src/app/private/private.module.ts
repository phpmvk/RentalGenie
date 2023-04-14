import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PrivateComponent,
    HomeComponent,
    AddListingComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  exports: [
    PrivateComponent
  ]
})
export class PrivateModule { }
