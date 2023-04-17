import { Component, Input } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  @Input()
  listingId!: string
  
  messages: Message[] = []
  showChat = false;

  constructor(
    private api: ApiClientService
  ){}

  chatMessageSend(msg: Message){
    console.log('This is the message sent', msg)
    this.messages.push(msg)
    this.api.chatMessageSend(msg, this.listingId).subscribe(res => {
      const response: Message = {
        content: res,
        isFromUser: false,
        timestamp: Date.now()
      }
      console.log('This is the message received', response)
      this.messages.push(response)
    })
  }

  toggleChat(){
    console.log('this is the listing ID tied to this chat: ', this.listingId)
    this.showChat = !this.showChat
  }

}
