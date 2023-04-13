import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBoxComponent } from './client_view/Chat/chat-box/chat-box.component';
import { ChatInputComponent } from './client_view/Chat/chat-input/chat-input.component';
import { ChatScreenComponent } from './client_view/Chat/chat-screen/chat-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './agent_view/login/login.component';
import { ListItemListingComponent } from './client_view/Listings/list-item-listing/list-item-listing.component';
import { IndividualListingComponent } from './client_view/Listings/individual-listing/individual-listing.component';
import { NavbarComponent } from './client_view/navbar/navbar.component';
import { ChatToggleComponent } from './client_view/Chat/chat-toggle/chat-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatInputComponent,
    ChatScreenComponent,
    LoginComponent,
    ListItemListingComponent,
    IndividualListingComponent,
    NavbarComponent,
    ChatToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
