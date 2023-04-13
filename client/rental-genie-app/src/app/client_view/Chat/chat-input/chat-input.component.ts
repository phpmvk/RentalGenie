import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {

  @Output()
  messageSend = new EventEmitter();

  formDefault = {
    content: new FormControl('', Validators.required),
    timestamp: new FormControl(''),
    isFromUser: new FormControl(true)
  }

  messageForm: FormGroup = new FormGroup(this.formDefault)

  handleSubmit(){
    if (this.messageForm.valid) {
      const message = this.messageForm.value;
      this.messageForm.reset(this.formDefault.content)
      message.timestamp = Date.now();
      this.messageSend.emit(message)
    }
  }
}

