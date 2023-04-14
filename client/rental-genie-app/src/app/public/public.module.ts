import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemListingComponent } from './components/Listings/list-item-listing/list-item-listing.component';
import { IndividualListingComponent } from './components/Listings/individual-listing/individual-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatToggleComponent } from './components/Chat/chat-toggle/chat-toggle.component';
import { ChatBoxComponent } from './components/Chat/chat-box/chat-box.component';
import { ChatInputComponent } from './components/Chat/chat-input/chat-input.component';
import { ChatScreenComponent } from './components/Chat/chat-screen/chat-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { ListingDetailComponent } from './pages/listing-detail/listing-detail.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ListItemListingComponent,
    IndividualListingComponent,
    NavbarComponent,
    ChatToggleComponent,
    ChatBoxComponent,
    ChatInputComponent,
    ChatScreenComponent,
    PublicComponent,
    ListingDetailComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicRoutingModule,
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
