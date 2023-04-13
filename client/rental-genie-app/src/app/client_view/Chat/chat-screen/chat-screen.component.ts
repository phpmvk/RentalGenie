import { Component, Input} from '@angular/core';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent {
  


  @Input()
  messages: Message[] = [];

  ngAfterViewChecked() {
    this.scrollDown()
  }
  
  scrollDown() {

  }

}
