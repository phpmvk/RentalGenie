import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBoxComponent } from './Chat/chat-box/chat-box.component';
import { ChatInputComponent } from './Chat/chat-input/chat-input.component';
import { ChatScreenComponent } from './Chat/chat-screen/chat-screen.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatInputComponent,
    ChatScreenComponent,
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
