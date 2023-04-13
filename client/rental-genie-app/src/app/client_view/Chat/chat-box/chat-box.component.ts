import { Component } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {

  messages: Message[] = []

  constructor(
    private api: ApiClientService
  ){}

  chatMessageSend(msg: Message){
    console.log('This is the message sent', msg)
    this.messages.push(msg)
    this.api.chatMessageSend(msg).subscribe(res => {
      const response: Message = {
        content: res,
        isFromUser: false,
        timestamp: Date.now()
      }
      console.log('This is the message received', response)
      this.messages.push(response)
    })
  }

}
