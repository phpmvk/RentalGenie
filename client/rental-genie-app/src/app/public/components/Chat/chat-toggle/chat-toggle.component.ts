import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-toggle',
  templateUrl: './chat-toggle.component.html',
  styleUrls: ['./chat-toggle.component.css']
})
export class ChatToggleComponent {

  @Output() toggleChatBox = new EventEmitter<boolean>();
  showChat = false;

  toggleChat() {
    this.showChat = !this.showChat;
    this.toggleChatBox.emit(this.showChat);
  }
}
