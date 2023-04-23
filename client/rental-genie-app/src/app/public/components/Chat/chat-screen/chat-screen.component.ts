import { Component, ElementRef, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements AfterViewChecked {

  @ViewChild('scrollScreen', {static: true}) scrollScreenRef!: ElementRef;
  
  @Input()
  messages: Message[] = [];

  ngAfterViewChecked() {
    this.scrollDown();
  }
  
  scrollDown() {
    const test = document.getElementsByClassName('message')
    test[test.length - 1].scrollIntoView();
  }
  
}