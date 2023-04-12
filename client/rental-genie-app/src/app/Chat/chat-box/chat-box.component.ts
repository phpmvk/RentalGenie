import { Component } from '@angular/core';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {

  messages: Message[] = []

}
